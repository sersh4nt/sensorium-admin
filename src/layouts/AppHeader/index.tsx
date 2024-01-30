import { Burger, Container, Group } from "@mantine/core";

import { useTranslation } from "react-i18next";
import { ROUTES } from "../../routes/Router";
import classes from "./AppHeader.module.css";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

interface AppHeaderProps {
  opened: boolean;
  toggle: () => void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ opened, toggle }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Logo />
          <Group gap={5} visibleFrom="sm">
            {ROUTES.map((link) => (
              <a
                key={link.label}
                href={link.path}
                className={classes.link}
                onClick={(event) => {
                  event.preventDefault();
                  navigate(link.path ?? "/");
                }}
              >
                {t(link.label)}
              </a>
            ))}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
};

export default AppHeader;
