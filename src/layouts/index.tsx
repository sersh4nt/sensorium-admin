import { AppShell, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppNavbar from "./AppNavbar";

const Layout: React.FC = () => {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <AppShell
      header={{ height: 56 }}
      padding="md"
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: true },
      }}
    >
      <AppShell.Header>
        <AppHeader opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar>
        <AppNavbar close={close} />
      </AppShell.Navbar>

      <AppShell.Main>
        <Container size="xl">
          <Outlet />
        </Container>
      </AppShell.Main>

      <AppShell.Footer></AppShell.Footer>
    </AppShell>
  );
};

export default Layout;
