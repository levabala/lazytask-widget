import { LazyTaskManager } from '@levabala/lazytask/build/dist';
import * as React from 'react';

const styles: React.CSSProperties = {
  width: "140px",
  display: "grid",
  rowGap: "1em",
  padding: "1em",
  background: "white",
  borderRadius: "5px"
};

export interface IProps {
  updateInterval: number;
}

export interface IState {
  lastTickDuration: number;
  tasksLastTick: number;
  tasksToDo: number;
}

export default class LazyWidget extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      lastTickDuration: 0,
      tasksLastTick: 0,
      tasksToDo: 0
    };
  }

  public updateData = () => {
    this.setState({
      lastTickDuration: LazyTaskManager.lastTickDuration,
      tasksLastTick: LazyTaskManager.tasksPerformedLastTick,
      tasksToDo: LazyTaskManager.taskStacks.reduce(
        (acc, stack) => acc + stack.length,
        0
      )
    });
  };

  public componentDidMount() {
    setInterval(() => this.updateData(), this.props.updateInterval);
  }

  public render() {
    const { tasksLastTick, tasksToDo, lastTickDuration } = this.state;
    return (
      <div style={styles}>
        <span>lastTickDuration: {lastTickDuration.toString().padEnd(5)}</span>
        <span>TasksToDo: {tasksToDo.toString().padEnd(5)}</span>
        <span>TasksLastTick: {tasksLastTick.toString().padEnd(5)}</span>
      </div>
    );
  }
}
