import { useEffect, useState } from "react";
import { Todo } from "../types/todo";
import { dummyData } from "../todos";

export default function useTodos() {
    const [todos, setTodos] = useState(() => {
        const savedTodos: Todo[] = JSON.parse(localStorage.getItem('todos') || "[]");
        return savedTodos.length > 0 ? savedTodos : dummyData;
    }
    );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (title: string) => {
        setTodos(preTodos => [
            {
                id: preTodos.length + 1,
                title: title,
                completed: false
            },
            ...preTodos
        ])
    }

    const setTodoCompleted = (id: number, completed: boolean) => {
        setTodos((prevTodos) => prevTodos.map((todo) => (
            todo.id === id ? { ...todo, completed } : todo
        )))
    }

    const deleteTodo = (id: number) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
    }

    const deleteAllCompletedTodos = () => {
        setTodos(prevTodos => prevTodos.filter((todo) => !todo.completed))
    }

    return {
        todos,
        setTodoCompleted,
        addTodo,
        deleteTodo,
        deleteAllCompletedTodos
    }
}