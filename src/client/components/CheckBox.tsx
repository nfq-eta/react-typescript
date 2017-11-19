import * as React from 'react';
import * as styles from './CheckBox.css';

export interface IItem {
    value: string | number;
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

export default class CheckBox extends React.Component<IProps, ICheckBoxState> {
    constructor(props: IProps) {
        super();

        this.state = {
            checked: props.checked || false,
        };
    }

    handleClick = () => {
        const checked = !this.state.checked;
        this.setState({ checked });

        const { value, label } = this.props.item;
        this.props.handleClick({ value, label }, checked);
    };

    render() {
        const { value, label } = this.props.item;

        return (
            <div
                key={'a' + value}
                onClick={this.handleClick}
                className={this.state.checked ? styles.checkBox : styles.checkBoxSelected}
            >
                <label>
                    <input type="checkbox" value={value} checked={this.state.checked} />
                    {label}
                </label>
            </div>
        );
    }
}
