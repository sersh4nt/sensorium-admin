import { Badge, Card, Group, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Device } from "../../models";

interface DeviceCardProps {
  device: Device;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ device }) => {
  const { t } = useTranslation();

  const isActive =
    device.last_active &&
    new Date().getTime() - new Date(device.last_active).getTime() <
      24 * 3600 * 1000;

  return (
    <Card withBorder padding="lg" radius="md">
      <Group justify="space-between">
        <Text>{t("device_id", { device_id: device.id })}</Text>
        {device.last_active ? (
          <Badge color={isActive ? "green" : "orange"}>
            {t(isActive ? "active" : "inactive")}
          </Badge>
        ) : (
          <Badge color="gray">{t("disabled")}</Badge>
        )}
      </Group>

      {device.name && <Text>{t("name_", { name: device.name })}</Text>}
    </Card>
  );
};

export default DeviceCard;
