import { initialState } from '../initialState';

describe('initialState.js', () => {
    it('matches snapshot', () => {
        expect(initialState).toMatchSnapshot();
    });
});
