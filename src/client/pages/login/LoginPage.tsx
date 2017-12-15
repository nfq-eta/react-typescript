import * as React from 'react';
import * as styles from './LoginPage.scss';
import { NavLink } from 'react-router-dom';

export interface ILoginPageProps {}

export interface ILoginPageState {}

export class LoginPage extends React.Component<ILoginPageProps, ILoginPageState> {
    constructor(props: ILoginPageProps) {
        super(props);
    }

    render() {
        return (
            <main className={styles.page}>
                Component name: LoginPage
                <hr/>
                <NavLink to={'/'}>back to home</NavLink>
            </main>
        );
    }
}
