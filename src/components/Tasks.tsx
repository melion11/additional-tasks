import React from "react";

export type TaskType = {
    taskId: number
    title: string
    isDone: boolean
}

export type DataPropsType = {
    title: string
    tasks: TaskType[]
    students: string[]
}





const Tasks = (props: DataPropsType) => {
    return (
        <div>{props.tasks[0].title}</div>
    );
}

export default Tasks;