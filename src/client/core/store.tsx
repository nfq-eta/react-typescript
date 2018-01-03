import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from './middleware';

import rootReducer, { IRootState } from './reducers';

export function configureStore(initialState?: IRootState) {
    let middleware = applyMiddleware(logger);

    if (process.env.NODE_ENV === 'development') {
        middleware = composeWithDevTools(middleware);
    }

    const store = createStore(rootReducer, initialState, middleware);

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
