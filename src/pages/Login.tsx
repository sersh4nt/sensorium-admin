import {
  Anchor,
  Checkbox,
  Container,
  Group,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useAuthTokenLoginCreate } from "../api/auth/auth";
import Form from "../components/forms/Form";
import { useAuth } from "../providers/AuthProvider";

type LoginInputs = {
  username: string;
  password: string;
  remember: boolean;
};

export const Login: React.FC = () => {
  const { t } = useTranslation();
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginInputs>({
    defaultValues: { username: "", password: "", remember: true },
  });

  const { mutate, isPending } = useAuthTokenLoginCreate();

  const signUp = () => navigate("/signup");

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    const { remember, ...rest } = data;
    mutate(
      { data: rest },
      {
        onSuccess: (response) => {
          setToken(response.auth_token, remember);
          navigate("/");
        },
        onError: (error) => {
          setError("root", {
            type: "custom",
            message: t(error.errors.at(0)?.code ?? "unknown_error"),
          });
        },
      }
    );
  };

  return (
    <Container size={420} my={20}>
      <Title ta="center">{t("welcome_back")}</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        {t("no_account_yet")}{" "}
        <Anchor size="sm" component="button" onClick={signUp}>
          {t("create_account")}
        </Anchor>
      </Text>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Form
          errors={errors}
          onSubmit={handleSubmit(onSubmit)}
          control={control}
          fields={[
            {
              name: "username",
              type: "text",
              label: "username",
              placeholder: "username",
              required: true,
            },
            {
              name: "password",
              type: "password",
              label: "password",
              placeholder: "password",
              required: true,
            },
          ]}
          isLoading={isPending}
          submitBtnText="sign_in"
          extraBefore={
            <Group justify="space-between" mt="lg">
              <Controller
                name="remember"
                control={control}
                render={({ field: { value, ...rest } }) => (
                  <Checkbox
                    label={t("remember_me")}
                    checked={value}
                    {...rest}
                  />
                )}
              />
              <Anchor component="button" size="sm">
                {t("forgot_password")}
              </Anchor>
            </Group>
          }
        />
      </Paper>
    </Container>
  );
};
