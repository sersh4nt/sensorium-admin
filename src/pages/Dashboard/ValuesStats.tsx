import { IconChartDots } from "@tabler/icons-react";
import { useControlIndicatorsValuesStatsRetrieve } from "src/api/control/control";
import Stats from "./Stats";
import { useTranslation } from "react-i18next";

const ValuesStats: React.FC = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useControlIndicatorsValuesStatsRetrieve();

  return (
    <Stats
      isLoading={isLoading}
      title="values_stats"
      Icon={IconChartDots}
      upperText={t("ejections_indicators", { count: data?.count })}
      lowerText={t("ejections_total", { count: data?.ejections_total })}
    />
  );
};

export default ValuesStats;
