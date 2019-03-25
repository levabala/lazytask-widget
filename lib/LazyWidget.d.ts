import * as React from 'react';
export interface IProps {
    updateInterval: number;
}
export interface IState {
    lastTickDuration: number;
    tasksLastTick: number;
    tasksToDo: number;
}
export default class LazyWidget extends React.Component<IProps, IState> {
    constructor(props: IProps);
    updateData: () => void;
    componentDidMount(): void;
    render(): JSX.Element;
}
