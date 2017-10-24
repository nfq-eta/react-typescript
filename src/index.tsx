import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { App } from './components/App';

export default render(
    <AppContainer>
        <App title="Demo" />
    </AppContainer>,
    document.getElementById('app') || document.createElement('div'),
);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        /* tslint:disable */
        const NextApp = require('./components/App').default;
        /* tslint:enable */
        render(
            <AppContainer>
                <NextApp/>
            </AppContainer>,
            document.getElementById('app'),
        );
    });
}
