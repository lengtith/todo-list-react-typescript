import { Todo } from "../types/todo"

interface TodoSummaryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
}

const TodoSummary = ({ todos, deleteAllCompleted }: TodoSummaryProps) => {
    const completedTodos = todos.filter((todo) => todo.completed);

    return (
        <div className="text-center space-y-2">
            <p>
                {completedTodos.length}/{todos.length} todos completed
            </p>
            {
                completedTodos.length > 0 && (
                    <button onClick={deleteAllCompleted} className="text-red-600">
                        Delete all
                    </button>
                )
            }
        </div>
    )
}

export default TodoSummary