import { Action, handleActions } from 'redux-actions';
import { IItem } from '../../components/checkbox/CheckBoxComponent';
import { ACTION } from '../../core/constants';

const initialState: IItem[] = [];

export default handleActions(
    {
        [ACTION.CHECKBOX.ADD]: (state: IItem[], action: Action<IItem>) => {
            return [...state, action.payload];
        },
        [ACTION.CHECKBOX.DELETE]: (state: IItem[], action: Action<IItem>) => {
            return state.filter(v => v !== action.payload);
        },
    },

    initialState,
);
