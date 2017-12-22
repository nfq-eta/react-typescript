import * as path from 'path';
import * as express from 'express';
import * as React from 'react';
import HttpStatus from 'http-status-enum';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router4-with-layouts';
// import { routerMiddleware } from 'react-router-redux';
// import createHistory from 'history/createMemoryHistory';
// import { createStore, applyMiddleware } from 'redux';
// import { createEpicMiddleware } from 'redux-observable';

// import reducer, { epics, State } from './redux/reducer';
// import AppContainer from './modules/AppContainer';
import { DefaultLayout } from '../client/layouts/default/DefaultLayout';
import { EmptyLayout } from '../client/layouts/empty/EmptyLayout';
import { LoginPage } from '../client/pages/login/LoginPage';
import { DemoPage } from '../client/pages/demo/DemoPage';
import { HomePage } from '../client/pages/home/HomePage';
import { configureStore } from '../client/core/store';
import { IItem } from '../client/components/checkbox/CheckBoxComponent';

const normalizePort = (val: number | string): number | string | boolean => {
    const nPort: number = typeof val === 'string' ? parseInt(val, 10) : val;
    return isNaN(nPort) ? val : nPort >= 0 ? nPort : false;
};

const renderHtml = (html: string, preLoadedState: IItem[]) => (
    `
    <!doctype html>
    <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <link rel="stylesheet" href="/css/app.css">
        </head>
        <body>
            <div id="app">${html}</div>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preLoadedState).replace(/</g, '\\u003c')}
            </script>
            <script src="/js/vendors.js"></script>
            <script src="/js/app.js"></script>
        </body>
    </html>
    `
);

const defaultPort = 8080;
const port = normalizePort(process.env.PORT || defaultPort);
const app = express();

app.use('/js', express.static(path.join('dist', 'js'), { redirect: false }));
app.use('/css', express.static(path.join('dist', 'css'), { redirect: false }));

app.use((req: express.Request, res: express.Response) => {
    /*const store = createStore<State>(reducer, applyMiddleware(
        routerMiddleware(createHistory()),
        createEpicMiddleware(epics),
    ));*/
    console.log(req);
    const store = configureStore();

    const context: { url?: string } = {};
    const html = renderToString(
<Provider store={store}>
            <StaticRouter basename={`${process.env.BASE_PATH}`}>
                <Switch>
                    <Route path="/" component={HomePage} exact={true} layout={DefaultLayout} />
                    <Route path="/demo" component={DemoPage} layout={DefaultLayout} />
                    <Route path="/login" component={LoginPage} layout={EmptyLayout} />
                </Switch>
            </StaticRouter>
        </Provider>,
    );
    if (context.url) {
        res.redirect(HttpStatus.MOVED_PERMANENTLY, context.url);
    } else {
        res.send(renderHtml(html, store.getState()));
    }
});

app.listen(port, () => console.log(`App is listening on ${port}`));
