import { ActionIcon, Badge, Card, Group, Text, Tooltip } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Device } from "src/models";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { modals } from "@mantine/modals";

interface DeviceCardProps {
  device: Device;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ device }) => {
  const { t } = useTranslation();

  const isActive =
    device.last_active &&
    new Date().getTime() - new Date(device.last_active).getTime() <
      24 * 3600 * 1000;

  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: t("delete_device"),
      centered: true,
      children: <Text size="sm">{t("delete_device_sure")}</Text>,
      labels: { confirm: t("confirm"), cancel: t("dont_do_it") },
      confirmProps: { color: "red" },
    });

  return (
    <Card withBorder padding="md" radius="md" shadow="sm">
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
      <Group justify="space-between">
        <Text>{t("actions")}</Text>
        <Group>
          <Tooltip label={t("edit")} withArrow position="bottom">
            <ActionIcon variant="outline" color="yellow">
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
    </Card>
  );
};

export default DeviceCard;
