import * as React from 'react';
import * as styles from './CheckBoxComponent.css';

export interface IItem {
  id: string | number;
  value: string | number;
  label: string;
}

export interface IProps {
  /** Checkbox item */
  item: IItem;
  /** Handle Action called when checked */
  handleClick: (item: IItem, checked: boolean) => void;
  /** Is it active by default? */
  checked?: boolean;
}

interface ICheckBoxState {
  checked: boolean;
}

export interface ITestEvent {
  target: { checked: boolean };
}

export class CheckBox extends React.Component<IProps, ICheckBoxState> {
  static defaultProps = {
    checked: false,
  };

  constructor(props: IProps) {
    super(props);

    this.state = {
      checked: !!props.checked,
    };
  }

  componentWillMount() {
    this.setState({
      checked: !!this.props.checked,
    });
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
        <input type="checkbox" onChange={this.handleClick} value={value} defaultChecked={this.props.checked} />
        {label}
      </label>
    );
  }
}
