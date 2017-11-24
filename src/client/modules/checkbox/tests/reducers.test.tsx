import addReducer from '../reducers';
import { IItem } from '../../../components/checkbox/CheckBox';
import { ACTION } from '../../../core/constants';

const initialState: IItem[] = [];

const item: IItem = {
    id: 'test',
    label: 'Test',
    value: 'test',
};

describe('store/topics/reducer', () => {

    it('should have initial state', () => {
        expect(addReducer(initialState, { type: ACTION.CHECKBOX.ADD, payload: item })).toEqual([item]);
    });

});
