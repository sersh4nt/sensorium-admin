import {
  Container,
  Title,
  Text,
  Anchor,
  Paper,
  Group,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
} from "@mantine/core";
import { useNavigate } from "react-router";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

type LoginInputs = {
  username: string;
  password: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<LoginInputs>();

  const signUp = () => navigate("/signup");

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    console.log(data);
  };

  return (
    <Container size={420} my={20}>
      <Title ta="center">Welcome back!</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{" "}
        <Anchor size="sm" component="button" onClick={signUp}>
          Create account
        </Anchor>
      </Text>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <TextInput
                label="Username"
                placeholder="Your username"
                required
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <PasswordInput
                label="Password"
                placeholder="Your password"
                required
                mt="md"
                {...field}
              />
            )}
          />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" type="submit">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
