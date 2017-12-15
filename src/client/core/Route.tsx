import * as React from 'react';
import { Route as ReactRoute, RouteProps } from 'react-router-dom';

export interface IRouteProps {
    layout?: React.ComponentType<RouteProps> | React.ComponentType<any>;
    component: React.ComponentType<RouteProps> | React.ComponentType<any>;
}

export interface IRouteState {
}

export class Route extends React.Component<IRouteProps & RouteProps, IRouteState> {
    constructor(props: IRouteProps) {
        super(props);
    }

    render() {
        const { component, layout, ...rest } = this.props;
        let routeComponent = (props: any) => React.createElement(component, props);

        if (layout) {
            routeComponent = props =>
                React.createElement(layout, props, React.createElement(component, props));
        }

        return <ReactRoute {...rest} render={routeComponent} />;
    }
}
