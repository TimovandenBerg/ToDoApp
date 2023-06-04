import { AiOutlinePlusCircle } from "react-icons/ai/";
import { useState } from "react";

import todoLogo from "../../assets/img/Logo.svg";

import "./Header.scss";

interface HeaderProps {
    onAddTask: (title: string) => void;
}

export function Header({ onAddTask }: HeaderProps ) {
    const [title, setTitle] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        onAddTask(title);
        setTitle("");
    }

    function onChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value);
    }

    return (
        <header className="header">
            <img src={todoLogo} alt="logo of the todo app" />
            <form className="header__createTask" onSubmit={ handleSubmit }>
                <input className="header__createTask__input" type="text" placeholder="Add a new task" value={title} onChange={onChangeTitle}/>
                <button className="header__createTask__button">
                    Create
                    <AiOutlinePlusCircle size={20} />    
                </button>
            </form>
        </header>
    )
}