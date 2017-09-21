import * as React from 'react';

import * as styles from './CheckBox.css';

export interface IItem {
    id: number;
    label: string;
    checked?: boolean;
}

export interface IProps extends IItem {
    handleClick: (item: IItem) => void;
}

export class CheckBox extends React.Component<IProps, Partial<IItem>> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            checked: props.checked,
        };
    }

    handleClick = () => {
        this.setState({
            checked: !this.state.checked,
        });
        const { id, label } = this.props;
        const checked = this.state.checked;
        this.props.handleClick({ id, label, checked });
    }

    public render() {
        const { id, label } = this.props;

        return (
            <div key={id} onClick={this.handleClick} className={styles.checkBox}>
                {id}. {!this.state.checked ? '[ ] ' : '[x] '}{label}
            </div>
        );
    }
}
