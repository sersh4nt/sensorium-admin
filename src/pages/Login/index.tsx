import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAuthTokenLoginCreate } from "../../api/auth/auth";
import { useAuth } from "../../providers/AuthProvider";

type LoginInputs = {
  username: string;
  password: string;
  remember: boolean;
};

const Login: React.FC = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<LoginInputs>({
    defaultValues: { username: "", password: "", remember: true },
  });

  const { mutateAsync, isPending, error } = useAuthTokenLoginCreate();

  const signUp = () => navigate("/signup");

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    const { remember, ...rest } = data;
    var response = await mutateAsync({ data: rest });
    setToken(response.auth_token, remember);
    navigate("/");
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
            <Controller
              name="remember"
              control={control}
              render={({ field: { value, ...rest } }) => (
                <Checkbox label="Remember me" checked={value} {...rest} />
              )}
            />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" type="submit" loading={isPending}>
            Sign in
          </Button>
          {error && (
            <Text mt="sm" c="red">
              {error.errors.at(0)?.code}
            </Text>
          )}
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
