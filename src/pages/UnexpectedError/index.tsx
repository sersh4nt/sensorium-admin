import { Button, Container, Group, Text, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import classes from "./UnexpectedError.module.css";

const UnexpectedError: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate(0);

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>500</div>
        <Title className={classes.title}>Произошла неизвестная ошибка</Title>
        <Text size="lg" ta="center" className={classes.description}>
          Мы не смогли обработать ваш запрос. Пожалуйста, подождите несколько
          секунд и обновите страницу. Наша команда уже работает над устранением
          проблемы.
        </Text>
        <Group justify="center">
          <Button variant="white" size="md" onClick={handleClick}>
            Обновить страницу
          </Button>
        </Group>
      </Container>
    </div>
  );
};

export default UnexpectedError;
