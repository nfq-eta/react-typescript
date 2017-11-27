import { Action, handleActions } from 'redux-actions';
import { IItem } from '../../components/checkbox/CheckBox';
import { ACTION } from '../../core/constants';

const initialState: IItem[] = [];

export default handleActions(
    {
        [ACTION.CHECKBOX.ADD]: (state: IItem[], action: Action<IItem>) => {
            return [...state, action.payload];
        },
    },

    initialState,
);
