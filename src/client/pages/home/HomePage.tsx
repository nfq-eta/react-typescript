import * as React from 'react';
import * as styles from './HomePage.scss';

export interface IHomePageProps {}

export interface IHomePageState {}

export class HomePage extends React.Component<IHomePageProps, IHomePageState> {
  constructor(props: IHomePageProps) {
    super(props);
  }

  render() {
    return <main className={styles.page}>Component name: HomePage</main>;
  }
}
