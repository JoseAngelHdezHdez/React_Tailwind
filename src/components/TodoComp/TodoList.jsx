import TodoItem from "./TodoItem";

function TodoList({ todos, removeTodo, updateTodo }) {
	return (
		<div className="mt-7 overflow-hidden rounded-t-md bg-white transition-all duration-900 [&>article]:p-4">
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					removeTodo={removeTodo}
					updateTodo={updateTodo}
				/>
			))}
		</div>
	);
}

export default TodoList;
