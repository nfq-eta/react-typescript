import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { App } from "./components/App";

render(
    <AppContainer>
        <App title="Demonas" />
    </AppContainer>,
    document.getElementById("app") as HTMLElement,
);

interface IRequireImport {
    default: any;
}

if (module.hot) {
    module.hot.accept("./components/App", () => {
        const NextApp = require<IRequireImport>("./components/App").default;
        render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            document.getElementById("app"),
        );
    });
}
