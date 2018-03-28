import * as path from 'path';
import * as fs from 'fs';
import * as express from 'express';
import * as React from 'react';
import HttpStatus from 'http-status-enum';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import * as getPort from 'get-port';
import * as compression from 'compression';

import { configureStore } from '../client/core/store';
import { CoreRoutes } from '../client/core/routes';
import { initialState } from '../client/core/initialState';
import { IRootState } from '../client/core/reducers';

const normalizePort = (val: number | string): number => {
  return typeof val === 'string' ? parseInt(val, 10) : val;
};

const readCss = (file: string) => {
  const abs = path.resolve(file);
  return fs.readFileSync(abs, 'utf8');
};

const styles = readCss('dist/css/app.css');
const name = require('../../package.json').name;
const description = require('../../package.json').description;

const renderHtml = (html: string, preLoadedState: IRootState) =>
  `
    <!doctype html>
    <html lang="en-us">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${name}</title>
            <meta name="Description" content="${description}">
            <style>
                ${styles}
            </style>
        </head>
        <body>
            <div id="app">${html}</div>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preLoadedState).replace(/</g, '\\u003c')}
            </script>
            <script src="/js/vendors.js" async></script>
            <script src="/js/app.js" async></script>
        </body>
    </html>
    `;

const port = normalizePort(process.env.PORT || 8080);
const app = express();

// compress all requests
app.use(compression());

app.use('/js', express.static(path.join('dist', 'js'), { redirect: false }));
app.use('/css', express.static(path.join('dist', 'css'), { redirect: false }));

app.use((req: express.Request, res: express.Response) => {
  /*const store = createStore<State>(reducer, applyMiddleware(
        routerMiddleware(createHistory()),
        createEpicMiddleware(epics),
    ));*/

  const store = configureStore(initialState);
  const context: { url?: string } = {};
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter
        basename={process.env.BASE_PATH !== '' ? process.env.BASE_PATH : undefined}
        location={req.url}
        context={context}
      >
        <CoreRoutes />
      </StaticRouter>
    </Provider>,
  );
  if (context.url) {
    res.redirect(HttpStatus.MOVED_PERMANENTLY, context.url);
  } else {
    res.send(renderHtml(html, store.getState() as IRootState));
  }
});

getPort({ port }).then(rPort => {
  // tslint:disable-next-line:no-console
  app.listen(rPort, () => console.log(`App is listening on http://localhost:${rPort}`));
});
