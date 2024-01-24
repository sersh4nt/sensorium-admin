import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./providers/AuthProvider";
import AxiosProvider from "./providers/axios";
import { Router } from "./routes";
import { theme } from "./theme";

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <MantineProvider theme={theme}>
        <AuthProvider>
          <AxiosProvider>
            <Router />
          </AxiosProvider>
        </AuthProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}
