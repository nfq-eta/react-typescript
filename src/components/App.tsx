import * as React from 'react';
import CheckBox, { IItem } from './CheckBox';

const items = require('./tests/__mocks__/CheckboxItems.json');
const selectedItems = require('./tests/__mocks__/CheckboxSelectedItems.json');

export interface IAppProps {
    title?: string;
}

export interface IAppState {
    items: IItem[];
}

export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = { items };
    }

    selectedItems = new Map(selectedItems);

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

    public render() {
        return (
            <div>
                <h1>{this.props.title || ''}</h1>
                { this.state.items.map(item => (
                    <CheckBox
                        item={item}
                        key={item.id}
                        checked={this.isSelected(item) || false}
                        handleClick={this.handleClick}
                    />
                ))}
            </div>
        );
    }
}
