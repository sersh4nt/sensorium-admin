import { Button, Container, Group, Text, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Illustration } from "./Illustration";
import classes from "./NotFound.module.css";

export const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <Illustration className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>{t("404_title")}</Title>
          <Text
            c="dimmed"
            size="lg"
            ta="center"
            className={classes.description}
          >
            {t("404_description")}
          </Text>
          <Group justify="center">
            <Button size="md">{t("404_back")}</Button>
          </Group>
        </div>
      </div>
    </Container>
  );
};
