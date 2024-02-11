import { IconDeviceMobile } from "@tabler/icons-react";
import Stats from "./Stats";
import { useTranslation } from "react-i18next";
import { useControlDevicesStatsRetrieve } from "src/api/control/control";

const DevicesStats: React.FC = () => {
  const { t } = useTranslation();

  const { data, isLoading } = useControlDevicesStatsRetrieve();

  return (
    <Stats
      title="devices_stats"
      Icon={IconDeviceMobile}
      upperText={t("active_devices", { count: data?.active })}
      lowerText={t("all_devices", { count: data?.total })}
      isLoading={isLoading}
    />
  );
};

export default DevicesStats;
