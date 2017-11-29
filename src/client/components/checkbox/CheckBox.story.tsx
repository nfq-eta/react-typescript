import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { CheckBox, IItem } from './CheckBox';

storiesOf('components/checkBox', module)
    .add('CheckBox.js', () => {
        return (
            <CheckBox
                item={object('Item', {
                    id: 'test1',
                    label: 'Test',
                    value: 'test',
                }) as IItem}
                handleClick={action('clicked')}
            />
        );
    });
