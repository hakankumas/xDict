import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/app/store";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { QueryClient, QueryClientProvider } from "react-query";
const query = new QueryClient();

import JwtController from "./components/JwtController.jsx";
<JwtController />;

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <QueryClientProvider client={query}>
                <SnackbarProvider maxSnack={3}>
                    <App />
                </SnackbarProvider>
            </QueryClientProvider>
        </BrowserRouter>
    </Provider>
);
