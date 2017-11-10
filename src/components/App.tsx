import * as React from 'react';
import CheckBox, { IItem } from './CheckBox';

import CheckboxItemsJson = require('./tests/__mocks__/CheckboxItems.json');
import CheckboxSelectedItemsJson = require('./tests/__mocks__/CheckboxSelectedItems.json');

export interface IAppProps {
    title?: string;
}

export interface IAppState {
    items: IItem[];
}

export default class App extends React.Component<IAppProps, IAppState> {
    selectedItems = new Map(CheckboxSelectedItemsJson);

    constructor() {
        super();

        this.state = { items: CheckboxItemsJson };
    }

    handleClick = (item: IItem, checked: boolean) => {
        if (checked) {
            this.selectedItems.set(item.id, item);
        } else {
            this.selectedItems.delete(item.id);
        }
    };

    isSelected(item: IItem): boolean {
        return this.selectedItems.has(item.id);
    }

    render() {
        return (
            <div>
                <h1>{this.props.title || ''}</h1>
                {this.state.items.map(item => (
                    <CheckBox
                        item={item}
                        key={item.id}
                        checked={this.isSelected(item) || false}
                        handleClick={this.handleClick}
                    />
                    ))
                }
            </div>
        );
    }
}
