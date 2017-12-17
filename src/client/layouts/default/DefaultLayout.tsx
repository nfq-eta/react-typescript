import * as React from 'react';
import { HeaderComponent } from '../../components/header/HeaderComponent';
import { FooterComponent } from '../../components/footer/FooterComponent';

import * as styles from './DefaultLayout.scss';

export interface IDefaultLayoutProps {}

export interface IDefaultLayoutState {}

export class DefaultLayout extends React.Component<IDefaultLayoutProps, IDefaultLayoutState> {
    constructor(props: IDefaultLayoutProps) {
        super(props);
    }

    render() {
        return (
            <div className={styles.layout}>
                Component name: DefaultLayout
                <HeaderComponent key={'header'} />
                <main key={'content'}>{this.props.children}</main>
                <FooterComponent key={'footer'} />
            </div>
        );
    }
}
