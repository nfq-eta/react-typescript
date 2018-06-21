import * as React from 'react';
import { view } from 'react-easy-state';

import { CheckBox, IItem } from '../components/checkbox/CheckBoxComponent';
import { store } from '../core/store';

import * as styles from './AppContainer.scss';

export type AppProps = {
  items?: IItem[];
};

export class App extends React.Component<AppProps, {}> {
  static defaultProps = {
    items: [],
  };

  handleAdd = () => {
    store.foo = store.foo == 'clicked' ? 'click me' : 'clicked';
    store.addAction({
      id: Math.round(new Date().getTime() / 1000).toString(),
      label: 'Demo',
      value: 'demo',
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleAdd} className={styles.button}>
          Add more
        </button>
        {store.checkBoxItems.map((item, index) => (
          <div key={index}>
            <CheckBox item={item} />
            <button>Delete</button>
          </div>
        ))}
      </div>
    );
  }
}

export default view(App);
