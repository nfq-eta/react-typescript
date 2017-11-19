import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from './middleware';

import rootReducer, { IRootState } from './reducers';
import { IItem } from '../components/CheckBox';

export function configureStore(initialState?: IRootState) {
    let middleware = applyMiddleware(logger);

    if (process.env.NODE_ENV === 'development') {
        middleware = composeWithDevTools(middleware);
    }

    const store = createStore(rootReducer, initialState, middleware) as Store<IItem[]>;

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
