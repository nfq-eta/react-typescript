import { store as createStore } from 'react-easy-state';
import { IItem } from '../../components/checkbox/CheckBoxComponent';

export type rootStore = {
  foo: string;
  checkBoxItems: IItem[];
};

export const rootStore: rootStore = {
  foo: 'buzz',
  checkBoxItems: [],
};

export const store = createStore({
  ...rootStore,
  // tslint:disable-next-line
  ...typeof window !== 'undefined' && window && window.__PRELOADED_STATE__,
  addAction(item: IItem) {
    store.checkBoxItems.push(item);
  },
});
