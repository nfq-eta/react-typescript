import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CheckBox, { IItem } from '../components/CheckBox';
import * as CheckboxItemsJson from '../components/tests/__mocks__/CheckboxItems.json';
import * as CheckboxSelectedItemsJson from '../components/tests/__mocks__/CheckboxSelectedItems.json';
import { addCheckbox } from '../modules/checkbox/actions';
import { IRootState } from '../core/reducers';

export interface IAppProps {
    actions: typeof addCheckbox;
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
            this.selectedItems.set(item.value, item);
        } else {
            this.selectedItems.delete(item.value);
        }
    };

    isSelected(item: IItem): boolean {
        return this.selectedItems.has(item.value);
    }

    handleAdd = () => {
        this.props.actions({
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
                    <CheckBox
                        item={item}
                        key={'a' + item.value}
                        checked={this.isSelected(item) || false}
                        handleClick={this.handleClick}
                    />
                    ))
                }
            </div>
        );
    }
}

function mapStateToProps(state: IRootState) {
    return ({
        items: state.checkBoxItems,
    });
}

function mapDispatchToProps(dispatch: any) {
    return ({
        actions: bindActionCreators(addCheckbox as any, dispatch),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

export { App as AppDisconnected };
