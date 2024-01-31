import { Box, Stack, UnstyledButton } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useAuth } from "src/providers/AuthProvider";
import { ROUTES } from "src/routes/Router";
import classes from "./AppNavbar.module.css";

interface AppNavbarProps {
  close: () => void;
}

const AppNavbar: React.FC<AppNavbarProps> = ({ close }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { removeToken } = useAuth();

  return (
    <div style={{ height: "100%" }}>
      <Stack justify="space-between" h="100%">
        <Box>
          {ROUTES.map((route, key) => (
            <UnstyledButton
              className={classes.control}
              key={key}
              onClick={() => {
                navigate(route.path ?? "/404");
                close();
              }}
            >
              {t(route.label)}
            </UnstyledButton>
          ))}
        </Box>
        <UnstyledButton
          className={classes.control}
          onClick={removeToken}
          style={{ color: "red" }}
        >
          {t("logout")}
        </UnstyledButton>
      </Stack>
    </div>
  );
};

export default AppNavbar;
