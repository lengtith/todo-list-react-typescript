import { Todo } from "../types/todo"
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}
const TodoList = ({ todos, onCompletedChange, onDelete }: TodoListProps) => {

    const todosSorted = todos.sort((a, b) => {
        if (a.completed === b.completed) {
            return b.id - a.id
        }
        return a.completed ? 1 : -1;
    })

    return (
        <>
            {todosSorted.length > 0
                ? (
                    <div className="space-y-2">
                        {
                            todosSorted.map((todo) => (
                                <TodoItem
                                    key={todo.id}
                                    todo={todo}
                                    onCompletedChange={onCompletedChange}
                                    onDelete={onDelete} />
                            ))
                        }
                    </div>)
                : (
                    <p className="text-center">No todos yet. Add new todo</p>
                )

            }
        </>
    )
}

export default TodoList