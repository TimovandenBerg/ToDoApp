import { Task } from "../Task/Task";
import { todosType } from "../../App";

import "./Tasks.scss";

interface TasksProps { 
    tasks: todosType[];
    onCompleted: (taskId: string) => void;
    onDelete: (taskId: string) => void;
}

export function Tasks({ tasks, onCompleted, onDelete }: TasksProps ) {
    const taskQuantity = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;
    
    return (
        <section className="tasks">
            <header className="tasks__header">
                <div>
                    <p>Create Tasks</p>
                    <span>{taskQuantity}</span>
                </div>
                <div>
                    <p className="purple">Completed tasks</p>
                    <span>{completedTasks} out of {taskQuantity}</span>
                </div>
            </header>

            <div className="tasks__list">
                {tasks.map((task) => (
                    <Task 
                        key={task.id} 
                        task={task} 
                        onCompleted={onCompleted} 
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </section>
    )
}