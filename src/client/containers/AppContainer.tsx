import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, MapDispatchToProps } from 'react-redux';
import * as uniqId from 'uniqid';

import { CheckBox, IItem } from '../components/checkbox/CheckBoxComponent';
import { addCheckbox } from '../modules/checkbox/actions';
import { IRootState } from '../core/reducers';

export interface IAppProps {
    addAction: typeof addCheckbox;
    items: IItem[];
}

export interface IAppState {
    items: IItem[];
}

class App extends React.Component<IAppProps, IAppState> {
    static defaultProps: Partial<IAppProps> = {
        items: [{
            id: 'string',
            label: 'Demo',
            value: 'sadasd',
        }],

        addAction: addCheckbox,
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
        this.props.addAction({
            id: uniqId(),
            value: 'demo',
            label: 'Demo',
        });
    };

    handleDelete = () => {
        // console.log(item);
    };

    render() {
        return (
            <div>
                <button onClick={this.handleAdd}>Add more</button>
                {this.props.items.map(item => (
                    <div key={item.id}>
                        <CheckBox
                            item={item}
                            handleClick={this.handleClick}
                        />
                        <button onClick={this.handleDelete.bind(this, item)}>Delete</button>
                    </div>
                ))}
            </div>
        );
    }
}

export function mapStateToProps(state: IRootState) {
    return ({
        items: state.checkBoxItems,
    });
}

export function mapDispatchToProps(dispatch: MapDispatchToProps<any, any>) {
    return ({
        addAction: bindActionCreators(addCheckbox, dispatch),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

export { App as AppDisconnected };
