import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Router } from "./routes";
import { theme } from "./theme";
import AuthProvider from "./providers/AuthProvider";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </MantineProvider>
  );
}
