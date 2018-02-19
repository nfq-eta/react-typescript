import * as React from 'react';
import { NavLink } from 'react-router-dom';

import * as styles from './NavigationComponent.scss';

export interface INavigationComponentProps {}

export interface INavigationComponentState {}

export class NavigationComponent extends React.Component<
    INavigationComponentProps,
    INavigationComponentState
> {
    constructor(props: INavigationComponentProps) {
        super(props);
    }

    render() {
        return (
            <nav className={styles.navigation}>
                <div>Component name: NavigationComponent</div>
                <NavLink to={'/'} exact={true}>
                    Home
                </NavLink>
                <NavLink to={'/demo'}>Demo</NavLink>
                <NavLink to={'/login'} style={{ float: 'right' }}>
                    Login
                </NavLink>
            </nav>
        );
    }
}
