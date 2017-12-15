import * as React from 'react';
import * as styles from './CheckBoxComponent.css';

export interface IItem {
    id: string;
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

export interface ITestEvent {
    target: { checked: boolean };
}

export class CheckBox extends React.Component<IProps, ICheckBoxState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            checked: props.checked || false,
        };
    }

    handleClick = (e: React.ChangeEvent<HTMLInputElement> | ITestEvent) => {
        const checked = e.target.checked;
        this.setState({ checked });

        this.props.handleClick(this.props.item, checked);
    };

    render() {
        const { value, label } = this.props.item;

        return (
            <label className={this.state.checked ? styles.checkBox : styles.checkBoxSelected}>
                <input
                    type="checkbox"
                    onChange={this.handleClick}
                    value={value}
                    defaultChecked={this.state.checked}
                />
                {label}
            </label>
        );
    }
}
