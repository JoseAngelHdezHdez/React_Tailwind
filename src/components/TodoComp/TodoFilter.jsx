function TodoFilter({ changeFilter, filter }) {
	return (
		<section className="container mx-auto mt-8">
			<div className="flex justify-center gap-9 rounded-md bg-white p-4 transition-all duration-1000 dark:bg-gray-800">
				<button
					className={`${
						filter === "all"
							? "text-blue-600 hover:text-gray-500"
							: "text-gray-600 transition-all duration-1000 hover:text-blue-600 dark:text-gray-300"
					}`}
					onClick={() => changeFilter("all")}
				>
					All
				</button>
				<button
					className={`${
						filter === "active"
							? "text-blue-600 hover:text-gray-500"
							: "text-gray-600 transition-all duration-1000 hover:text-blue-600 dark:text-gray-300"
					}`}
					onClick={() => changeFilter("active")}
				>
					Active
				</button>
				<button
					className={`${
						filter === "completed"
							? "text-blue-600 hover:text-gray-500"
							: "text-gray-600 transition-all duration-1000 hover:text-blue-600 dark:text-gray-300"
					}`}
					onClick={() => changeFilter("completed")}
				>
					Completed
				</button>
			</div>
		</section>
	);
}

export default TodoFilter;
