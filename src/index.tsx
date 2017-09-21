import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { App } from './components/App';

const items = [
    { id: 1, label: 'Foo' },
    { id: 2, label: 'Buzz' },
    { id: 3, label: 'Fuzz' },
    { id: 4, label: 'Fizz' },
    { id: 5, label: 'FizzBuzz' },
    { id: 6, label: 'Boo' },
];

render(
    <AppContainer>
        <App title="Demonas" items={items} />
    </AppContainer>,
    document.getElementById('app') as HTMLElement,
);

interface IRequireImport {
    default: any;
}

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require<IRequireImport>('./components/App').default;
        render(
            <AppContainer>
                <NextApp/>
            </AppContainer>,
            document.getElementById('app'),
        );
    });
}
