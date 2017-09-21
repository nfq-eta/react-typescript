import * as React from 'react';

import { Demo } from './Demo';
import { CheckBox, IItem } from './CheckBox';

export interface IAppProps {
    title?: string;
    items: IItem[];
}

export class App extends React.Component<IAppProps, Partial<IAppProps>> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
            items: props.items,
        };
    }

    handleClick = (item: IItem) => {
        console.log(this, item);
    }

    public render() {
        return (
            <div>
                <h1>Hello...</h1>
                <Demo title={this.props.title || ''} />from {this.props.title}!;
                { this.state.items && this.state.items.map(item => (
                    <CheckBox
                        key={item.id}
                        id={item.id}
                        label={item.label}
                        checked={!!item.checked}
                        handleClick={this.handleClick}
                    />
                ))}
            </div>
        );
    }
}
