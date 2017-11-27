import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';

import App from './containers/App';
import { configureStore } from './core/store';

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route path="/" component={App} />
                </Switch>
            </Router>
        </Provider>
    </AppContainer>,
    document.getElementById('app')  as HTMLElement,
);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        const NextApp = require('./containers/App').default;
        ReactDOM.render(
            <AppContainer>
                <Provider store={store}>
                    <Router history={history}>
                        <Switch>
                            <Route path="/" component={NextApp} />
                        </Switch>
                    </Router>
                </Provider>
            </AppContainer>,
            document.getElementById('app')  as HTMLElement,
        );
    });
}
