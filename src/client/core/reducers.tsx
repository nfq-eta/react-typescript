import { combineReducers } from 'redux';

import reducers from '../modules/checkbox/reducers';
import { IItem } from '../components/checkbox/CheckBoxComponent';

export interface IRootState {
  checkBoxItems: IItem[];
}

const rootReducer = combineReducers({
  checkBoxItems: reducers,
});

export default rootReducer;
