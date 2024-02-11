import { CodeHighlight } from "@mantine/code-highlight";
import {
  Button,
  Divider,
  Group,
  LoadingOverlay,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import { useTranslation } from "react-i18next";
import { useAuthGenerateDeviceCodeCreate } from "src/api/auth/auth";
import {
  controlDevicesList,
  getControlDevicesListQueryKey,
  useControlDevicesList,
} from "src/api/control/control";
import { client } from "src/providers/query";
import DeviceCard from "./DeviceCard";

export const loader = () => {
  return client.fetchQuery({
    queryFn: controlDevicesList,
    queryKey: getControlDevicesListQueryKey(),
  });
};

export const Component: React.FC = () => {
  const { mutate, isPending } = useAuthGenerateDeviceCodeCreate();
  const { data, isLoading } = useControlDevicesList();
  const { t } = useTranslation();

  const createDevice = () => {
    mutate(undefined as void, {
      onSuccess: (data) =>
        modals.open({
          title: t("device_created"),
          centered: true,
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

  return (
    <>
      <Group justify="space-between">
        <Title>{t("user_devices")}</Title>
        <Button
          onClick={createDevice}
          loading={isPending}
          color="teal"
          variant="outline"
        >
          {t("create_device")}
        </Button>
      </Group>

      <Divider my="sm" />
      <SimpleGrid cols={{ sm: 1, md: 2, lg: 4 }}>
        {isLoading && <LoadingOverlay visible />}
        {data?.length == 0 && <Text>{t("no_devices_found")}</Text>}
        {data?.map((device, key) => (
          <DeviceCard key={key} device={device} />
        ))}
      </SimpleGrid>
    </>
  );
};
