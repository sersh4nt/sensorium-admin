import { LoadingOverlay, SimpleGrid } from "@mantine/core";
import { useControlDevicesList } from "../../api/control/control";
import DeviceCard from "./DeviceCard";

export const Devices: React.FC = () => {
  const { data, isFetching } = useControlDevicesList();

  if (isFetching) {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <LoadingOverlay visible />
      </div>
    );
  }

  return (
    <SimpleGrid cols={{'sm': 1, 'md': 2, 'lg': 4}}>
      {data?.map((device, key) => (
        <DeviceCard key={key} device={device} />
      ))}
    </SimpleGrid>
  );
};
