import { IconDeviceHeartMonitor } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { useControlEquipmentStatsRetrieve } from "src/api/control/control";
import Stats from "./Stats";

const EquipmentStats: React.FC = () => {
  const { t } = useTranslation();

  const { data, isLoading } = useControlEquipmentStatsRetrieve();

  return (
    <Stats
      title="equipment_stats"
      Icon={IconDeviceHeartMonitor}
      upperText={t("equipment_count", { count: data?.equipment })}
      lowerText={t("indicators_count", { count: data?.indicators })}
      isLoading={isLoading}
    />
  );
};

export default EquipmentStats;
