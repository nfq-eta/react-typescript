import { addCheckbox } from '../actions';
import { ACTION } from '../../../core/constants';

describe('', () => {
    it('should create an action to checkbox', () => {
        const payload = {
            id: 'demo1',
            value: 'demo',
            label: 'Demo',
        };

        const expectedAction = {
            payload,
            type: ACTION.CHECKBOX.ADD,
        };

        expect(addCheckbox(payload)).toEqual(expectedAction);
    });
});
