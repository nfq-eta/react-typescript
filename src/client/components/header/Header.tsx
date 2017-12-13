import * as React from 'react';

import * as styles from './Header.scss';

export interface IHeaderProps {
}

export interface IHeaderState {
}

export class Header extends React.Component<IHeaderProps, IHeaderState> {
    constructor(props: IHeaderProps) {
        super(props);
    }

    render() {
        return (
            <div className={styles.header}>
                <h1>App</h1>
                Component name: Header
                File name: Header.tsx
            </div>
        );
    }
}
