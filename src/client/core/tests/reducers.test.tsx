import { addCheckbox } from '../../modules/checkbox/actions';
import configureStore from 'redux-mock-store';
import { IRootState } from '../reducers';

describe('', () => {
    it('mapStateToProps()', () => {
        const mockStore = configureStore();
        const initialState: IRootState = {
            checkBoxItems: [],
        };
        const store = mockStore(initialState);

        let action;
        store.dispatch(addCheckbox({ id: 'test', value: 'test', label: 'Test' }));
        action = store.getActions();
        expect(action[0].type).toBe('ac@checkbox.add');
    });
});
