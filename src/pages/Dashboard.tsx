import {
  Button,
  Card,
  Grid,
  LoadingOverlay,
  Modal,
  Text,
} from "@mantine/core";
import { flattenTree } from "react-accessible-treeview";
import { useControlEquipmentList } from "../api/control/control";
import TreeView from "../components/TreeView";
import { useTranslation } from "react-i18next";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";

export const Dashborad: React.FC = () => {
  const { t } = useTranslation();
  const { data, isFetching } = useControlEquipmentList();
  const [opened, { open, close }] = useDisclosure(false);

  if (isFetching) {
    return <LoadingOverlay visible />;
  }

  if (!data) {
    return <div>no data</div>;
  }

  const dataWithGeneratedIds = flattenTree({
    name: "",
    children: [
      {
        name: "Fruits",
        children: [
          { name: "Avocados" },
          { name: "Bananas" },
          { name: "Berries" },
          { name: "Oranges" },
          { name: "Pears" },
        ],
      },
      {
        name: "Drinks",
        children: [
          { name: "Apple Juice" },
          { name: "Chocolate" },
          { name: "Coffee" },
          {
            name: "Tea",
            children: [
              { name: "Black Tea" },
              { name: "Green Tea" },
              { name: "Red Tea" },
              { name: "Matcha" },
            ],
          },
        ],
      },
      {
        name: "Vegetables",
        children: [
          { name: "Beets" },
          { name: "Carrots" },
          { name: "Celery" },
          { name: "Lettuce" },
          { name: "Onions" },
        ],
      },
    ],
  });

  return (
    <div style={{ height: "100%" }}>
      <Grid h="100%">
        <Grid.Col span={{ xs: 12, lg: 3 }}>
          <Card withBorder w="100%" h="100%">
            <Text>{t("devices_list")}</Text>
            <Button
              fullWidth
              color="teal"
              variant="outline"
              onClick={open}
              rightSection={<IconPlus size={14} />}
            >
              {t("create_device")}
            </Button>
            {data.length > 0 ? (
              <TreeView data={dataWithGeneratedIds} />
            ) : (
              <div>no devices found</div>
            )}
          </Card>
        </Grid.Col>
        <Grid.Col span={{ xs: 12, lg: 9 }}>
          <Card withBorder w="100%" h="100%">
            <TreeView data={dataWithGeneratedIds} />
          </Card>
        </Grid.Col>
      </Grid>
      <Modal opened={opened} onClose={close} title={t("create_device")}></Modal>
    </div>
  );
};
