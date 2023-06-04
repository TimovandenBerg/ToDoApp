import { TbTrash } from "react-icons/tb";
import {BsFillCheckCircleFill} from "react-icons/bs";
import { todosType } from "../../App";

import "./Task.scss";

interface TaskProps {
    task: todosType;
    onCompleted: (taskId: string) => void;
    onDelete: (taskId: string) => void; 
}

export function Task( { task, onCompleted, onDelete }: TaskProps ) {

    return (
        <div className="task">
            <button className="task__checkContainer" onClick={() => onCompleted(task.id)}>
                {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
            </button>
            <p className={task.isCompleted ? "textCompleted" : ""}>{task.title}</p>
            <button className="task__deleteButton" onClick={() => onDelete(task.id)}>
                <TbTrash size={20} />
            </button>
        </div>
    )
}