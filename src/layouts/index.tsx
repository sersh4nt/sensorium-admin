import { AppShell, Container } from "@mantine/core";
import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";

const Layout: React.FC = () => {
  return (
    <AppShell header={{ height: 56 }} padding="md">
      <AppShell.Header>
        <AppHeader />
      </AppShell.Header>

      <AppShell.Main>
        <Container size="xl">
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
