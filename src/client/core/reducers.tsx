import { combineReducers } from 'redux';
import checkBoxReducers from '../modules/checkbox/reducers';
import { IItem } from '../components/checkbox/CheckBox';

export interface IRootState {
    checkBoxItems: IItem[];
}

const rootReducer = combineReducers({
    checkBoxItems: checkBoxReducers,
});

export default rootReducer;
