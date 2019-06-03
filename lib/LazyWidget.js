"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dist_1 = require("@levabala/lazytask/build/dist");
var React = require("react");
var styles = {
    width: "140px",
    display: "grid",
    rowGap: "1em",
    padding: "1em",
    background: "white",
    borderRadius: "5px"
};
var LazyWidget = (function (_super) {
    __extends(LazyWidget, _super);
    function LazyWidget(props) {
        var _this = _super.call(this, props) || this;
        _this.updateData = function () {
            _this.setState({
                lastTickDuration: Math.max.apply(Math, dist_1.LazyTaskManager.durationHistory),
                tasksLastTick: dist_1.LazyTaskManager.tasksPerformedLastTick,
                tasksToDo: dist_1.LazyTaskManager.taskStacks.reduce(function (acc, stack) { return acc + stack.length; }, 0),
                tasksSuspended: dist_1.LazyTaskManager.tasksSuspended.length,
                tasksDestructed: dist_1.LazyTaskManager.tasksDestructed
            });
        };
        _this.state = {
            lastTickDuration: 0,
            tasksLastTick: 0,
            tasksToDo: 0,
            tasksSuspended: 0,
            tasksDestructed: 0
        };
        return _this;
    }
    LazyWidget.prototype.componentDidMount = function () {
        var _this = this;
        setInterval(function () { return _this.updateData(); }, this.props.updateInterval);
    };
    LazyWidget.prototype.render = function () {
        var _a = this.state, tasksLastTick = _a.tasksLastTick, tasksToDo = _a.tasksToDo, lastTickDuration = _a.lastTickDuration, tasksSuspended = _a.tasksSuspended, tasksDestructed = _a.tasksDestructed;
        return (React.createElement("div", { style: styles },
            React.createElement("span", null,
                "lastTickDuration: ",
                lastTickDuration.toString().padEnd(5)),
            React.createElement("span", null,
                "TasksToDo: ",
                tasksToDo.toString().padEnd(5)),
            React.createElement("span", null,
                "TasksSuspended: ",
                tasksSuspended.toString().padEnd(5)),
            React.createElement("span", null,
                "TasksLastTick: ",
                tasksLastTick.toString().padEnd(5)),
            React.createElement("span", null,
                "TasksDestructed: ",
                tasksDestructed.toString().padEnd(5))));
    };
    return LazyWidget;
}(React.Component));
exports.default = LazyWidget;
//# sourceMappingURL=LazyWidget.js.map