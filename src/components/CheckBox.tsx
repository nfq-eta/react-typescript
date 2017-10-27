import * as React from 'react';

import * as styles from './CheckBox.css';

export interface IItem {
    id: number;
    label: string;
}

export interface IProps {
    item: IItem;
    handleClick: (item: IItem, checked: boolean) => void;
    checked?: boolean;
}

interface ICheckBoxState {
    checked: boolean;
}

export class CheckBox extends React.Component<IProps, ICheckBoxState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            checked: props.checked || false,
        };
    }

    handleClick = () => {
        const checked = !this.state.checked;
        this.setState({ checked });

        const { id, label } = this.props.item;
        this.props.handleClick({ id, label }, checked);
    };

    public render() {
        const { id, label } = this.props.item;

        return (
            <div key={id} onClick={this.handleClick} className={styles.checkBox}>
                {id}. {!this.state.checked ? '[ ] ' : '[x] '}{label}
            </div>
        );
    }
}
