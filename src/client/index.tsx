import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router-dom';

import { configureStore } from './core/store';
import { Route } from './core/Route';
import { DefaultLayout } from './layouts/default/DefaultLayout';
import { HomePage } from './pages/home/HomePage';
import { LoginPage } from './pages/login/LoginPage';
import { EmptyLayout } from './layouts/empty/EmptyLayout';
import { DemoPage } from './pages/demo/DemoPage';

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <Router  history={history}>
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
                    <Router history={history}>
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
