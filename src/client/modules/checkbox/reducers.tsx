import { handleActions } from 'redux-actions';
import { IItem } from '../../components/CheckBox';
import { ACTION } from '../../core/constants';

const initialState: IItem[] = [];

export default handleActions<IItem[], any>(
    {
        [ACTION.CHECKBOX.ADD]: (state: IItem[], action: any) => {
            return [...state, action.payload];
        },
    },

    initialState,
);
