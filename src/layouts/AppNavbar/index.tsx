import { Box, Stack, UnstyledButton } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router";
import { ROUTES } from "src/routes/Router";
import classes from "./AppNavbar.module.css";
import { useDispatch } from "react-redux";
import { removeToken } from "src/redux/auth";

interface AppNavbarProps {
  close: () => void;
}

const AppNavbar: React.FC<AppNavbarProps> = ({ close }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <div style={{ height: "100%" }}>
      <Stack justify="space-between" h="100%">
        <Box>
          {ROUTES.map((route, key) => (
            <UnstyledButton
              className={classes.control}
              key={key}
              onClick={() => {
                if (route.path == location.pathname) {
                  close();
                  return;
                }
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
          onClick={() => dispatch(removeToken())}
          style={{ color: "red" }}
        >
          {t("logout")}
        </UnstyledButton>
      </Stack>
    </div>
  );
};

export default AppNavbar;
