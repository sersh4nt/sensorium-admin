import { Button, Stack, Text } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import "dayjs/locale/ru";
import { useDispatch } from "react-redux";
import { useCurrentIndicator, useIndicatorDates } from "src/redux/hooks";
import { setDates } from "src/redux/indicator";

interface ChartControlsProps {
  resetZoom: () => void;
}

const ChartControls: React.FC<ChartControlsProps> = ({ resetZoom }) => {
  const indicator = useCurrentIndicator();
  const dispatch = useDispatch();
  const value = useIndicatorDates();

  return (
    <Stack gap="sm">
      <Stack gap={4}>
        {indicator?.id && <Text>Индикатор №{indicator.id}</Text>}
        {indicator?.indicator_type && (
          <Text size="sm">Тип: {indicator.indicator_type}</Text>
        )}
        {indicator?.min_value && (
          <Text size="sm">Минимальный порог: {indicator.min_value}</Text>
        )}
        {indicator?.max_value && (
          <Text size="sm">Максимальный порог: {indicator.max_value}</Text>
        )}
      </Stack>
      <Button onClick={resetZoom} size="xs" variant="outline">
        Сбросить масштаб
      </Button>
      <DatePickerInput
        type="range"
        label="Показания по дате"
        value={value}
        onChange={(v) => dispatch(setDates(v))}
        locale="ru"
      />
    </Stack>
  );
};

export default ChartControls;
