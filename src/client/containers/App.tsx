import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, MapDispatchToProps } from 'react-redux';
import * as uniqId from 'uniqid';

import CheckBox, { IItem } from '../components/checkbox/CheckBox';
import * as CheckboxItemsJson from '../components/checkbox/tests/__mocks__/CheckboxItems.json';
import * as CheckboxSelectedItemsJson from '../components/checkbox/tests/__mocks__/CheckboxSelectedItems.json';
import { addCheckbox } from '../modules/checkbox/actions';
import { IRootState } from '../core/reducers';

export interface IAppProps {
    addAction: typeof addCheckbox;
    items: IItem[];
}

export interface IAppState {
    items: IItem[];
}

// @connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component<IAppProps, IAppState> {
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

    handleAdd = () => {
        this.props.addAction({
            id: uniqId(),
            value: 'demo',
            label: 'Demo',
        });
    };

    render() {
        return (
            <div>
                <h1>App</h1>
                <button onClick={this.handleAdd}>Add more</button>
                {this.props.items.map(item => (
                    <div key={item.id}>
                        <CheckBox
                            item={item}
                            checked={this.isSelected(item) || false}
                            handleClick={this.handleClick}
                        />
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
