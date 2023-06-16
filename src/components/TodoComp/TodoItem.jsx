import React from "react";
import CheckIcon from "../Icons/CheckIcon";
import CrossIcon from "../Icons/CrossIcon";

const TodoItem = React.forwardRef(
	({ todo, removeTodo, updateTodo, ...props }, ref) => {
		const { title, id, completed } = todo;
		return (
			<article
				{...props}
				ref={ref}
				className="flex gap-4 border-b border-b-gray-400 transition-all duration-1000 dark:bg-gray-800"
			>
				<button
					className={`h-5 w-5 flex-none rounded-full border-2 ${
						completed
							? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
							: "inline-block"
					}`}
					onClick={() => updateTodo(id)}
				>
					{completed && <CheckIcon />}
				</button>
				<p
					className={`grow ${
						completed
							? "text-gray-400 line-through dark:text-gray-500"
							: "text-gray-600 dark:text-gray-300"
					}`}
				>
					{title}
				</p>
				<button className="flex-none" onClick={() => removeTodo(id)}>
					<CrossIcon />
				</button>
			</article>
		);
	}
);

export default TodoItem;
