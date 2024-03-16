import { useState } from "react"

interface AddTodoFormProps {
    onSubmit: (title: string) => void;
}

const AddTodoForm = ({onSubmit}: AddTodoFormProps) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!input.trim()) {
            return;
        }

        onSubmit(input);
        setInput("");
    }

    return (
        <div className="py-5">
            <form className="flex gap-2" onSubmit={handleSubmit}>
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text" 
                className="p-2 rounded-md grow border border-gray-400" placeholder="What need to be done?" />
                <button
                    type="submit"
                    className="bg-blue-600 rounded-md text-white hover:bg-blue-700 py-2 px-3" >
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddTodoForm