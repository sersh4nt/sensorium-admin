import { Grid, SimpleGrid } from "@mantine/core";
import DevicesStats from "./DevicesStats";
import EquipmentStats from "./EquipmentStats";
import IndicatorsStats from "./IndicatorsStats";
import ValuesStats from "./ValuesStats";
import React from "react";
import EquipmentList from "./EquipmentList";
import IndicatorChart from "./IndicatorChart";

export const Component: React.FC = () => {
  return (
    <Grid>
      <Grid.Col span={12}>
        <SimpleGrid cols={{ xs: 1, sm: 2, lg: 4 }}>
          <DevicesStats />
          <EquipmentStats />
          <IndicatorsStats />
          <ValuesStats />
        </SimpleGrid>
      </Grid.Col>
      <Grid.Col span={{ xs: 12, lg: 3 }}>
        <EquipmentList />
      </Grid.Col>
      <Grid.Col span={{ xs: 12, lg: 9 }}>
        <IndicatorChart />
      </Grid.Col>
    </Grid>
  );
};
