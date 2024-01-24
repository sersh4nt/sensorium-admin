import { Anchor, Container, Paper, Text, Title } from "@mantine/core";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import {
  useAuthTokenLoginCreate,
  useAuthUsersCreate,
} from "../../api/auth/auth";
import Form from "../../components/forms/Form";
import { useAuth } from "../../providers/AuthProvider";

type SignupInputs = {
  username: string;
  email: string;
  password: string;
  password2: string;
};

const Signup: React.FC = () => {
  const { t } = useTranslation();
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignupInputs>({
    defaultValues: { username: "", password: "", password2: "", email: "" },
  });

  const { mutate: registerAsync, isPending: isCreating } = useAuthUsersCreate();
  const { mutate: login, isPending: isAuthorizing } = useAuthTokenLoginCreate();

  const logIn = () => navigate("/login");

  const onSubmit: SubmitHandler<SignupInputs> = (data) => {
    registerAsync(
      { data },
      {
        onError: (error) => {
          error.errors.forEach((error) =>
            setError((error.attr as keyof SignupInputs) ?? "root", {
              type: "custom",
              message: error.code + "_user",
            })
          );
        },
        onSuccess: () =>
          login(
            { data: data },
            {
              onSuccess: (response) => {
                navigate("/");
                setToken(response.auth_token, true);
              },
              onError: (error) =>
                setError("root", {
                  type: "custom",
                  message: error.errors.at(0)?.code,
                }),
            }
          ),
      }
    );
  };

  return (
    <Container size={420} my={20}>
      <Title ta="center">{t("signup_title")}</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        {t("have_account")}{" "}
        <Anchor size="sm" component="button" onClick={logIn}>
          {t("login")}
        </Anchor>
      </Text>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Form
          errors={errors}
          control={control}
          onSubmit={handleSubmit(onSubmit)}
          fields={[
            {
              name: "username",
              type: "text",
              label: "username",
              placeholder: "username",
              required: true,
            },
            {
              name: "email",
              type: "text",
              label: "email",
              placeholder: "email",
            },
            {
              name: "password",
              type: "password",
              label: "password",
              placeholder: "password",
              required: true,
            },
            {
              name: "password2",
              type: "password",
              label: "password_confirmation",
              placeholder: "password",
              required: true,
              validate: (value, fieldValues) =>
                value === fieldValues.password || "passwords_mismatch",
            },
          ]}
          submitBtnText="sign_up"
          isLoading={isCreating || isAuthorizing}
        />
      </Paper>
    </Container>
  );
};

export default Signup;
