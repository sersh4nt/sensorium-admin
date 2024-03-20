import {
  Chart as ChartJS,
  ChartOptions,
  Filler,
  LineElement,
  LinearScale,
  PointElement,
  ScriptableContext,
  TimeScale,
  Tooltip,
} from "chart.js";
import "chartjs-adapter-date-fns";
import zoomPlugin from "chartjs-plugin-zoom";
import annotationPlugin from "chartjs-plugin-annotation";
import { Line } from "react-chartjs-2";

import { Box, Card, Center, Flex, Skeleton } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { useCurrentIndicator, useIndicatorDates } from "src/redux/hooks";
import { useControlIndicatorsValuesList } from "src/api/control/control";
import ChartControls from "./ChartControls";

ChartJS.register(
  Tooltip,
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
  Filler,
  zoomPlugin,
  annotationPlugin
);

interface ChartData {
  x: string;
  y: number;
}

const IndicatorChart: React.FC = () => {
  const [options, setOptions] = useState<ChartOptions<"line">>({
    responsive: false,
    maintainAspectRatio: false,
    scales: { x: { type: "time" as const } },
    plugins: {
      zoom: {
        zoom: {
          mode: "x" as const,
          wheel: { enabled: true },
          drag: {
            enabled: true,
            backgroundColor: "rgba(128,128,128,0.2)",
          },
        },
      },
      legend: { display: false },
      filler: { propagate: false },
    },
  });
  const chartRef = useRef<ChartJS<"line", ChartData[]>>(null);
  const indicator = useCurrentIndicator();
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [dtFrom, dtTo] = useIndicatorDates();

  const { data, isFetching } = useControlIndicatorsValuesList(
    indicator?.id.toString() ?? "null",
    Object.assign(
      {},
      dtFrom && { from: dtFrom?.toISOString() },
      dtTo && { to: dtTo.toISOString() }
    ),
    { query: { enabled: !!indicator } }
  );

  const handleReset = () => {
    if (!chartRef.current) {
      return;
    }
    chartRef.current.resetZoom();
  };

  useEffect(() => {
    if (!data) return;

    const parsedData = data.map((item) => ({
      y: Number(item.value),
      x: item.add_date,
    }));

    setChartData(parsedData);
  }, [data]);

  useEffect(() => {
    if (!indicator) return;

    setOptions({
      responsive: true,
      maintainAspectRatio: false,
      scales: { x: { type: "time" as const } },
      plugins: {
        zoom: {
          zoom: {
            mode: "x" as const,
            wheel: { enabled: true },
            drag: {
              enabled: true,
              backgroundColor: "rgba(128,128,128,0.2)",
            },
          },
        },
        legend: { display: false },
        filler: { propagate: false },
        annotation: {
          annotations: {
            min: {
              type: "line",
              yMin: indicator.min_value,
              yMax: indicator.min_value,
              borderColor: "green",
              borderWidth: 2,
            },
            max: {
              type: "line",
              yMin: indicator.max_value,
              yMax: indicator.max_value,
              borderWidth: 2,
              borderColor: "red",
            },
          },
        },
      },
    });
  }, [indicator]);

  if (!indicator) {
    return (
      <Card withBorder w="100%" h="calc(100vh - 14rem)" shadow="sm">
        <Center h="100%" w="100%">
          <Box>Индикатор не выбран. Выберите индикатор из меню слева</Box>
        </Center>
      </Card>
    );
  }

  return (
    <Card withBorder shadow="sm" h="100%">
      <Flex h="100%" gap="md">
        <ChartControls resetZoom={handleReset} />
        <Skeleton visible={isFetching} h="100%">
          <Box w="100%" h="100%">
            {data?.length ? (
              <Line
                ref={chartRef}
                height={undefined}
                width={undefined}
                data={{
                  datasets: [
                    {
                      data: chartData,
                      backgroundColor: (context: ScriptableContext<"line">) => {
                        const ctx = context.chart.ctx;
                        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                        gradient.addColorStop(0, "rgba(234, 71, 237, 1)");
                        gradient.addColorStop(1, "rgba(234, 71, 237, 0.2)");
                        return gradient;
                      },
                      borderColor: "#d900ff",
                      fill: true,
                    },
                  ],
                }}
                options={options}
              />
            ) : (
              <Center h="100%" w="100%">
                <Box>Для заданных параметров показания не были найдены</Box>
              </Center>
            )}
          </Box>
        </Skeleton>
      </Flex>
    </Card>
  );
};

export default IndicatorChart;
