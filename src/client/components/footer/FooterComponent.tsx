import * as React from 'react';

import * as styles from './FooterComponent.scss';

export interface IFooterComponentProps {}

export interface IFooterComponentState {}

export class FooterComponent extends React.Component<IFooterComponentProps, IFooterComponentState> {
    constructor(props: IFooterComponentProps) {
        super(props);
    }

    render() {
        return <footer className={styles.footer}>Component name: FooterComponent</footer>;
    }
}
