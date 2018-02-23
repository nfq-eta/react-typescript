import { IItem } from '../components/checkbox/CheckBoxComponent';

export const initialState = {
    checkBoxItems: [
        { id: '1', label: 'Label 1', value: 'Value 1' },
        { id: '2', label: 'Label 2', value: 'Value 2' },
    ] as IItem[],
};
