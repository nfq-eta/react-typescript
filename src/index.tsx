/* tslint:disable */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
const loader = require('react-hot-loader');
import App from './components/App';

ReactDOM.render(
    <loader.AppContainer>
        <App />
    </loader.AppContainer>,
    document.getElementById('app')  as HTMLElement,
);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default;
        ReactDOM.render(
            <loader.AppContainer>
                <NextApp/>
            </loader.AppContainer>,
            document.getElementById('app')  as HTMLElement,
        );
    });
}
