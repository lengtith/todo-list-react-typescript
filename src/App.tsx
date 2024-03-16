import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TodoSummary from './components/TodoSummary';
import useTodos from './hooks/useTodos';

const App = () => {
  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompletedTodos
  } = useTodos();

  return (
    <main className='w-screen h-screen'>
      <h1 className='py-10 text-3xl text-center font-bold'>Todos</h1>
      <div className='max-w-4xl mx-auto'>
        <AddTodoForm onSubmit={addTodo} />
        <div className='space-y-2'>
          <TodoList
            todos={todos}
            onCompletedChange={setTodoCompleted}
            onDelete={deleteTodo} />
        </div>
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompletedTodos} />
    </main>
  )
}

export default App