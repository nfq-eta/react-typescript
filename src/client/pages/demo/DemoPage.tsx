import * as React from 'react';

import * as styles from './DemoPage.scss';
import AppContainer from '../../containers/AppContainer';
import { addCheckbox } from '../../modules/checkbox/actions';

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
                <AppContainer addAction={addCheckbox} items={[{ id: '', label: '', value: '' }]} />
            </main>
        );
    }
}
