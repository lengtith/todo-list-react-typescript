import { Todo } from '../types/todo'

interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onCompletedChange, onDelete }: TodoItemProps) => {
    return (
        <div className='flex justify-between items-center'>
            <label htmlFor={`check${todo.id}`} className='flex grow items-center gap-2 rounded-md border border-gray-400 bg-white hover:bg-slate-50 p-2'>
                <input
                    id={`check${todo.id}`}
                    type="checkbox"
                    className='scale-125'
                    checked={todo.completed}
                    onChange={(e) => onCompletedChange(todo.id, e.target.checked)} />
                <span className={todo.completed ? "line-through text-gray-600" : ""}>{todo.title}</span>
            </label>
            <button onClick={() => onDelete(todo.id)} className='text-white text-xl ml-2 p-2 bg-red-600 rounded-md'>
                &times;
            </button>
        </div>
    )
}

export default TodoItem