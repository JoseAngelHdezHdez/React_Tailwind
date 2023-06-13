import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
	const [title, setTitle] = useState("");

	const handleSubmitAddTodo = (e) => {
		e.preventDefault();
		if (title.trim().length > 0) {
			createTodo(title);
			return setTitle("");
		}
		setTitle("");
	};

	return (
		<form
			onSubmit={handleSubmitAddTodo}
			className="duration-1000 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-3 transition-all dark:bg-gray-800"
		>
			<span className="inline-block h-5 w-5 rounded-full border-2 "></span>
			<input
				className="duration-1000 w-full text-gray-400 outline-none transition-all dark:bg-gray-800"
				type="text"
				placeholder="Create new todo..."
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
		</form>
	);
};

export default TodoCreate;
