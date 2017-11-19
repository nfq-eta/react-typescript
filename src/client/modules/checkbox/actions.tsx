import { createAction } from 'redux-actions';
import { IItem } from '../../components/CheckBox';
import { ACTION } from '../../core/constants';

export const addCheckbox = createAction<IItem>(ACTION.CHECKBOX.ADD);
