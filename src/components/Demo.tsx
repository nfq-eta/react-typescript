import * as React from 'react';

export interface IDemoProps {
    title: string;
}

export class Demo extends React.Component<IDemoProps, {}> {
    public render() {
        return <p>Title: {this.props.title}!</p>;
    }
}
