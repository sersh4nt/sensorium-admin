import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "src/providers/AuthProvider";
import AxiosProvider from "src/providers/axios";
import { client } from "src/providers/query";
import { router } from "src/routes";
import { theme } from "src/theme";

import "@mantine/core/styles.css";
import "@mantine/code-highlight/styles.css";


export default function App() {
  return (
    <AuthProvider>
      <AxiosProvider>
        <MantineProvider theme={theme}>
          <ModalsProvider>
            <QueryClientProvider client={client}>
              <RouterProvider router={router} />
            </QueryClientProvider>
          </ModalsProvider>
        </MantineProvider>
      </AxiosProvider>
    </AuthProvider>
  );
}
