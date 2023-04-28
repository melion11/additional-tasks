import React from "react";
import {DataType} from "../App";

type TasksPropsType = {
    data: DataType
}

const Tasks = (props: TasksPropsType) => {

    const mapTasks = props.data.tasks.map(elem => {
        return (
            <li>
                <span>{elem.taskId}</span>
                <span>{elem.title}</span>
                <span>{elem.isDone}</span>
            </li>

    );
    })

    const mapStudents = props.data.students.map(elem => {
        return (
            <li>
                <span>{elem}</span>
            </li>
        );
    })

    return (
        <div>
            <h1>{props.data.title}</h1>
            <ul>
                {mapTasks}
            </ul>
            <ul>
                {mapStudents}
            </ul>


        </div>
    );
}

export default Tasks;