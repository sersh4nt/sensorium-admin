import { Container, Title, Text, Button, Group } from "@mantine/core";
import { Illustration } from "./Illustration";
import classes from "./NotFound.module.css";
import { useTranslation } from "react-i18next";

const NotFound: React.FC = () => {
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

export default NotFound;
