import * as React from 'react';
import { connect } from 'react-redux';
import * as uniqId from 'uniqid';

import { CheckBox, IItem } from '../components/checkbox/CheckBoxComponent';
import { addCheckbox, deleteCheckbox } from '../modules/checkbox/actions';
import { IRootState } from '../core/reducers';
import * as style from './AppContainer.scss';

export interface IAppProps {
    addAction: typeof addCheckbox;
    deleteAction: typeof deleteCheckbox;
    items: IItem[];
}

export interface IAppState {
    items: IItem[];
}

class AppContainer extends React.Component<IAppProps, IAppState> {
    static defaultProps: Partial<IAppProps> = {
        items: [],
        addAction: addCheckbox,
        deleteAction: deleteCheckbox,
    };

    selectedItems = new Map();

    constructor(props: IAppProps) {
        super(props);

        this.state = { items: [] };
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

    handleAdd = () => {
        if (this.props.addAction) {
            this.props.addAction({
                id: uniqId(),
                value: 'demo',
                label: 'Demo',
            });
        }
    };

    handleAddToState = () => {
        this.setState((prevState: IAppState) => {
            return {
                items: [
                    ...prevState.items,
                    {
                        id: uniqId(),
                        value: 'demo',
                        label: 'Demo',
                    },
                ],
            };
        });
    };

    handleDelete = (item: IItem) => {
        if (this.props.deleteAction) {
            this.props.deleteAction(item);
        }
    };

    render() {
        return (
            <div className={style.appContainer}>
                Component name: AppContainer
                <hr />
                <button onClick={this.handleAdd}>Add more</button>
                <button onClick={this.handleAddToState}>Add more to state</button>
                {this.state.items.map(item => (
                    <div key={item.id}>
                        <CheckBox
                            item={item}
                            checked={this.isSelected(item) || false}
                            handleClick={this.handleClick}
                        />
                        <button onClick={this.handleDelete.bind(this, item)}>Delete</button>
                    </div>
                ))}
                {this.props.items &&
                    this.props.items.map(item => (
                        <div key={item.id}>
                            <CheckBox item={item} handleClick={this.handleClick} />
                            <button onClick={this.handleDelete.bind(this, item)}>Delete</button>
                        </div>
                    ))}
            </div>
        );
    }
}

export function mapStateToProps(state: IRootState) {
    return {
        items: state.checkBoxItems,
    };
}

export default connect(mapStateToProps, {
    addAction: addCheckbox,
    deleteAction: deleteCheckbox,
})(AppContainer);

export { AppContainer as AppDisconnected };
