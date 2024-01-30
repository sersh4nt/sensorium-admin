import { CodeHighlight } from "@mantine/code-highlight";
import {
  Button,
  Center,
  LoadingOverlay,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import { useTranslation } from "react-i18next";
import { useAuthGenerateDeviceCodeCreate } from "../../api/auth/auth";
import { useControlDevicesList } from "../../api/control/control";
import DeviceCard from "./DeviceCard";

export const Devices: React.FC = () => {
  const { mutate, isPending } = useAuthGenerateDeviceCodeCreate();
  const { data, isFetching } = useControlDevicesList();
  const { t } = useTranslation();

  const createDevice = () => {
    mutate(undefined as void, {
      onSuccess: (data) =>
        modals.open({
          title: t("device_created"),
          children: (
            <>
              <Text ta="justify" mb="sm">
                {t("copy_device_code")}
              </Text>
              <CodeHighlight
                code={data.code}
                copyLabel={t("copy")}
                copiedLabel={t("copied")}
                mb="sm"
                lang="bash"
              />
              <Text size="sm" c="dimmed" ta="justify">
                {t("copy_device_code_affix")}
              </Text>
              <Button
                onClick={() => modals.closeAll()}
                mt="md"
                mr={0}
                ml="auto"
                display="block"
                color="teal"
                variant="light"
              >
                {t("ok")}
              </Button>
            </>
          ),
        }),
    });
  };

  if (isFetching) {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <LoadingOverlay visible />
      </div>
    );
  }

  if (!data) {
    return <div>cant fetch data</div>;
  }

  if (data.length == 0) {
    return (
      <Center>
        <Stack align="center" gap="md">
          <Text>{t("no_devices_found")}</Text>
          <Button onClick={createDevice} loading={isPending}>
            {t("create_device")}
          </Button>
        </Stack>
      </Center>
    );
  }

  return (
    <SimpleGrid cols={{ sm: 1, md: 2, lg: 4 }}>
      {data?.map((device, key) => (
        <DeviceCard key={key} device={device} />
      ))}
    </SimpleGrid>
  );
};
