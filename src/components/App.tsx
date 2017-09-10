import * as React from "react";

import { Demo } from "./Demo";

export interface IAppProps {
    title: string;
}

export class App extends React.Component<IAppProps, {}> {
    public render() {
        return <h1>Hello... <Demo title={this.props.title}/>from {this.props.title}!</h1>;
    }
}
