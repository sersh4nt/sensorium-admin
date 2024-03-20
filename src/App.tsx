import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { client } from "src/providers/query";
import { router } from "src/routes";
import { theme } from "src/theme";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/code-highlight/styles.css";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <ModalsProvider>
          <QueryClientProvider client={client}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ModalsProvider>
      </MantineProvider>
    </Provider>
  );
}
