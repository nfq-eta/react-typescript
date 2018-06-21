import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

import { CoreRoutes } from './core/routes';

// tslint:disable-next-line:variable-name
function reactRender(App: any) {
  const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;
  renderMethod(
    <AppContainer>
      <BrowserRouter basename={process.env.BASE_PATH !== '' ? process.env.BASE_PATH : undefined}>
        <App />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('app') as HTMLElement,
  );
}

reactRender(CoreRoutes);

if (module.hot) {
  module.hot.accept('./core/routes', () => {
    const nextApp = require('./core/routes').CoreRoutes;
    reactRender(nextApp);
  });
}
