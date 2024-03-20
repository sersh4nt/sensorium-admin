import { Card, ScrollArea, Skeleton, Text, Stack } from "@mantine/core";
import { useControlEquipmentList } from "src/api/control/control";
import EquipmentItem from "./EquipmentItem";

const EquipmentList: React.FC = () => {
  const { data, isLoading } = useControlEquipmentList();

  return (
    <Card withBorder w="100%" shadow="lg" h="calc(100vh - 14rem)">
      <Stack h="100%" gap="sm">
        <Text>Приборы и их индикаторы</Text>
        <ScrollArea>
          <Skeleton visible={isLoading}>
            {data?.map((item, key) => (
              <EquipmentItem equipment={item} key={key} />
            ))}
          </Skeleton>
        </ScrollArea>
      </Stack>
    </Card>
  );
};

export default EquipmentList;
