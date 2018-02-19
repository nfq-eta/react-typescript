import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reduxLogger } from './middleware';

import reducers, { IRootState } from './reducers';

export function configureStore(initialState?: IRootState) {
    let middleware = applyMiddleware(reduxLogger);

    if (process.env.NODE_ENV === 'development') {
        middleware = composeWithDevTools(middleware);
    }

    const store = createStore(reducers, initialState, middleware);

    if (!!module.hot) {
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
