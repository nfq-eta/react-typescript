import * as React from 'react';
import { render } from 'react-dom';
const loader = require('react-hot-loader');
import { App } from './components/App';

/* tslint:disable */


function rend(Comp:any) {
    render(<Comp />, document.getElementById("app"))
}

rend(
    <loader.AppContainer>
        <App title="Demo" />
    </loader.AppContainer>
);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default;
        render(
            <loader.AppContainer>
                <NextApp/>
            </loader.AppContainer>,
            document.getElementById('app')  as HTMLElement,
        );
    });
}
