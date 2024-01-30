import { ROUTES } from "../../routes/Router";
import { UnstyledButton } from "@mantine/core";
import { useTranslation } from "react-i18next";
import classes from "./AppNavbar.module.css";
import { useNavigate } from "react-router";

interface AppNavbarProps {
  close: () => void;
}

const AppNavbar: React.FC<AppNavbarProps> = ({ close }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
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
    </>
  );
};

export default AppNavbar;
