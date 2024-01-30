import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/code-highlight/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./providers/AuthProvider";
import AxiosProvider from "./providers/axios";
import { ModalsProvider } from "@mantine/modals";
import { Router } from "./routes";
import { theme } from "./theme";

const client = new QueryClient();

export default function App() {
  return (
    <AuthProvider>
      <AxiosProvider>
        <MantineProvider theme={theme}>
          <ModalsProvider>
            <QueryClientProvider client={client}>
              <Router />
            </QueryClientProvider>
          </ModalsProvider>
        </MantineProvider>
      </AxiosProvider>
    </AuthProvider>
  );
}
