import * as React from 'react';
import * as styles from '../default/DefaultLayout.scss';

export interface IEmptyLayoutProps {}

export interface IEmptyLayoutState {}

export class EmptyLayout extends React.Component<IEmptyLayoutProps, IEmptyLayoutState> {
  constructor(props: IEmptyLayoutProps) {
    super(props);
  }

  render() {
    return (
      <div className={styles.layout}>
        Component name: EmptyLayout
        {this.props.children}
      </div>
    );
  }
}
