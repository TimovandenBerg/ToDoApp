import { useEffect, useState } from "react";

import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";

const LOCAL_STORAGE_KEY = "todo:savedTasks";

export type todosType = {
  id: string,
  title: string,
  isCompleted: boolean,
}

function App() {
  const [tasks, setTasks] = useState<todosType[]>([]);

  function loadSavedTasks() {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
   }

  useEffect(() => {
    loadSavedTasks();
  }, [])

  function setTasksAndSave(newTasks: todosType[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(taskTitle: string) {
    setTasksAndSave([
      ...tasks, 
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      }
    ]);
  }

  function deleteTask(taskId: string) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function toggleTaskCompleted(taskId: string) { 
    const newTask = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task, isCompleted: !task.isCompleted 
        };
      }
      return task;
    });
    setTasksAndSave(newTask);
  }

  console.log(tasks);
  

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks 
        tasks={tasks}
        onCompleted={toggleTaskCompleted}
        onDelete={deleteTask}
      />
    </>
  )
}

export default App
