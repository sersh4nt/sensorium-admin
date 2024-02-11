import { Card, Group, Skeleton, Stack, Text, ThemeIcon } from "@mantine/core";
import { useTranslation } from "react-i18next";

interface StatsProps {
  title: string;
  Icon: (props: any) => JSX.Element;
  upperText: string;
  lowerText: string;
  isLoading?: boolean;
}

const Stats: React.FC<StatsProps> = ({
  title,
  Icon,
  upperText,
  lowerText,
  isLoading = false,
}) => {
  const { t } = useTranslation();

  return (
    <Skeleton visible={isLoading}>
      <Card withBorder shadow="sm">
        <Group justify="space-between" align="start">
          <Stack gap="xs">
            <Text tt="uppercase" size="xs" fw={700} c="gray">
              {t(title)}
            </Text>
            <Text fw={500} size="lg">
              {upperText}
            </Text>
          </Stack>
          <ThemeIcon color="gray" variant="light" size={38} radius="md">
            <Icon size="1.8rem" />
          </ThemeIcon>
        </Group>
        <Text fw={500} size="lg">
          {lowerText}
        </Text>
      </Card>
    </Skeleton>
  );
};

export default Stats;
