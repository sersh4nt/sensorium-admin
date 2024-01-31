import {
  Button,
  Card,
  Grid,
  LoadingOverlay,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { useControlEquipmentList } from "src/api/control/control";
import DevicesStats from "./DevicesStats";

export const Component: React.FC = () => {
  const { t } = useTranslation();
  const { data, isFetching } = useControlEquipmentList();

  return (
    <Grid>
      <Grid.Col span={12}>
        <SimpleGrid cols={{ xs: 1, sm: 2, lg: 4 }}>
          <DevicesStats />
          <DevicesStats />
          <DevicesStats />
          <DevicesStats />
        </SimpleGrid>
      </Grid.Col>
      <Grid.Col span={{ xs: 12, lg: 3 }}>
        <Card withBorder w="100%" h="100%">
          <Text>{t("devices_list")}</Text>
          <Button
            fullWidth
            color="teal"
            variant="outline"
            rightSection={<IconPlus size={14} />}
          >
            {t("create_device")}
          </Button>
          {isFetching && <LoadingOverlay visible />}
        </Card>
      </Grid.Col>
      <Grid.Col span={{ xs: 12, lg: 9 }}>
        <Card withBorder w="100%" h="100%"></Card>
      </Grid.Col>
    </Grid>
  );
};
