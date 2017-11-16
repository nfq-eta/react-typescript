import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as loader from 'react-hot-loader';
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
