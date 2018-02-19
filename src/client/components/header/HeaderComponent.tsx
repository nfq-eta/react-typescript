import * as React from 'react';

import * as styles from './HeaderComponent.scss';
import { NavigationComponent } from '../navigation/NavigationComponent';

export interface IHeaderProps {}

export interface IHeaderState {}

export class HeaderComponent extends React.Component<IHeaderProps, IHeaderState> {
    constructor(props: IHeaderProps) {
        super(props);
    }

    render() {
        return (
            <div className={styles.header}>
                Component name: HeaderComponent
                <NavigationComponent />
            </div>
        );
    }
}
