import { createAction } from 'redux-actions';

import { ACTION } from '../../core/constants';
import { IItem } from '../../components/checkbox/CheckBoxComponent';

export const addCheckbox = createAction<IItem>(ACTION.CHECKBOX.ADD);
