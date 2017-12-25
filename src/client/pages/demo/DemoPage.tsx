import * as React from 'react';

import * as styles from './DemoPage.scss';
import AppContainer from '../../containers/AppContainer';

export interface IDemoPageProps {
}

export interface IDemoPageState {
}

export class DemoPage extends React.Component<IDemoPageProps, IDemoPageState> {
    constructor(props: IDemoPageProps) {
        super(props);
    }

    render() {
        return (
            <main className={styles.page}>
                Component name: DemoPage
                <AppContainer />
            </main>
        );
    }
}
