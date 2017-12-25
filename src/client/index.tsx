import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

import { configureStore } from './core/store';
import { CoreRoutes } from './core/routes';
import { initialState } from './core/initialState';

const store = configureStore(initialState);

function reactRender(App: any) {
    ReactDOM.hydrate(
        <AppContainer>
            <Provider store={store}>
                <BrowserRouter basename={process.env.BASE_PATH ? process.env.BASE_PATH : ''}>
                    <App />
                </BrowserRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('app')  as HTMLElement,
    );
}

reactRender(CoreRoutes);

if (module.hot) {
    module.hot.accept('./core/routes', () => {
        const NextApp = require('./core/routes').default;

        reactRender(NextApp);
    });
}
