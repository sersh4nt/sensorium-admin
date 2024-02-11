import {
  ActionIcon,
  Badge,
  Card,
  Group,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import {
  getControlDevicesListQueryKey,
  useControlDevicesDestroy,
  useControlDevicesPartialUpdate,
} from "src/api/control/control";
import DeviceForm from "src/components/DeviceForm";
import { Device } from "src/models";

interface DeviceCardProps {
  device: Device;
}

const DeviceActions: React.FC<DeviceCardProps> = ({ device }) => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { mutate: deleteDevice } = useControlDevicesDestroy();
  const { mutate: editDevice } = useControlDevicesPartialUpdate();

  const onSubmit = (data: any) => {
    editDevice(
      { id: device.id.toString(), data },
      {
        onSuccess: () =>
          queryClient.invalidateQueries({
            queryKey: getControlDevicesListQueryKey(),
          }),
      }
    );
    modals.closeAll();
  };

  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: t("delete_device"),
      centered: true,
      children: <Text size="sm">{t("delete_device_sure")}</Text>,
      labels: { confirm: t("confirm"), cancel: t("dont_do_it") },
      confirmProps: { color: "red" },
      closeOnConfirm: true,
      onConfirm: () => {
        deleteDevice(
          { id: device.id.toString() },
          {
            onSuccess: () => {
              queryClient.invalidateQueries({
                queryKey: getControlDevicesListQueryKey(),
              });
            },
          }
        );
      },
    });

  const openEditModal = () =>
    modals.open({
      title: t("edit_device"),
      centered: true,
      children: <DeviceForm onSubmit={onSubmit} defaultValues={device} />,
    });

  return (
    <Group justify="space-between">
      <Text>{t("actions")}</Text>
      <Group>
        <Tooltip label={t("edit")} withArrow position="bottom">
          <ActionIcon variant="outline" color="yellow" onClick={openEditModal}>
            <IconEdit size={20} />
          </ActionIcon>
        </Tooltip>
        <Tooltip label={t("delete")} withArrow position="bottom">
          <ActionIcon variant="outline" color="red" onClick={openDeleteModal}>
            <IconTrash size={20} />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Group>
  );
};

const DeviceCard: React.FC<DeviceCardProps> = ({ device }) => {
  const { t } = useTranslation();

  const isActive =
    device.last_active &&
    new Date().getTime() - new Date(device.last_active).getTime() <
      24 * 3600 * 1000;

  return (
    <Card withBorder padding="md" radius="md" shadow="sm">
      <Stack gap="xs" justify="space-between" h="100%">
        <Group justify="space-between">
          <Text>{t("device_id", { device_id: device.id })}</Text>
          {device.last_active ? (
            <Tooltip
              label={isActive ? t("active_last_day") : t("inactive_last_day")}
              withArrow
              position="right"
            >
              <Badge color={isActive ? "green" : "orange"}>
                {t(isActive ? "active" : "inactive")}
              </Badge>
            </Tooltip>
          ) : (
            <Tooltip label={t("device_wasnt_activated")}>
              <Badge color="gray">{t("disabled")}</Badge>
            </Tooltip>
          )}
        </Group>
        {device.name && <Text>{t("name_", { name: device.name })}</Text>}
        <DeviceActions device={device} />
      </Stack>
    </Card>
  );
};

export default DeviceCard;
