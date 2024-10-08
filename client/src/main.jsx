import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/app/store";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import JwtController from "./components/JwtController.jsx";

<JwtController />;

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <SnackbarProvider maxSnack={3}>
                <App />
            </SnackbarProvider>
        </BrowserRouter>
    </Provider>
);
