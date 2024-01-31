import { Avatar, Box, Burger, Container, Group, Menu } from "@mantine/core";

import { IconLogout } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAuth } from "src/providers/AuthProvider";
import { ROUTES } from "src/routes/Router";
import classes from "./AppHeader.module.css";
import Logo from "./Logo";

interface AppHeaderProps {
  opened: boolean;
  toggle: () => void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ opened, toggle }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { removeToken } = useAuth();

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Logo />
          <Group>
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
            <Box visibleFrom="sm">
              <Menu>
                <Menu.Target>
                  <Avatar style={{ cursor: "pointer" }} />
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    leftSection={<IconLogout />}
                    color="red"
                    onClick={removeToken}
                  >
                    {t("logout")}
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Box>
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              hiddenFrom="sm"
            />
          </Group>
        </div>
      </Container>
    </header>
  );
};

export default AppHeader;
