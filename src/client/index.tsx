import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router4-with-layouts';

import { configureStore } from './core/store';
import { DefaultLayout } from './layouts/default/DefaultLayout';
import { HomePage } from './pages/home/HomePage';
import { LoginPage } from './pages/login/LoginPage';
import { EmptyLayout } from './layouts/empty/EmptyLayout';
import { DemoPage } from './pages/demo/DemoPage';

const store = configureStore();

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <Router basename={`${process.env.BASE_PATH}`}>
                <Switch>
                    <Route path="/" component={HomePage} exact={true} layout={DefaultLayout} />
                    <Route path="/demo" component={DemoPage} layout={DefaultLayout} />
                    <Route path="/login" component={LoginPage} layout={EmptyLayout} />
                </Switch>
            </Router>
        </Provider>
    </AppContainer>,
    document.getElementById('app')  as HTMLElement,
);

if (module.hot) {
    module.hot.accept('./layouts/DefaultLayout', () => {
        const NextApp = require('./layouts/default/DefaultLayout').default;
        ReactDOM.render(
            <AppContainer>
                <Provider store={store}>
                    <Router basename={`${process.env.BASE_PATH}`}>
                        <Switch>
                            <Route path="/" component={NextApp} layout={DefaultLayout} />
                        </Switch>
                    </Router>
                </Provider>
            </AppContainer>,
            document.getElementById('app')  as HTMLElement,
        );
    });
}
