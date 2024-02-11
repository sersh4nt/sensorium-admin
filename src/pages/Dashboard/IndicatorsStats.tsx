import { IconGauge } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { useControlIndicatorsStatsRetrieve } from "src/api/control/control";
import Stats from "./Stats";

const IndicatorsStats: React.FC = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useControlIndicatorsStatsRetrieve();

  return (
    <Stats
      isLoading={isLoading}
      title="indicators_stats"
      Icon={IconGauge}
      upperText={t("recognized_count", { count: data?.recognized })}
      lowerText={t("indicators_total", { count: data?.count })}
    />
  );
};

export default IndicatorsStats;
