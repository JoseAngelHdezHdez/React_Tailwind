import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import TodoComputed from "./components/TodoComp/TodoComputed";
import TodoCreate from "./components/TodoComp/TodoCreate";
import TodoFilter from "./components/TodoComp/TodoFilter";
import TodoList from "./components/TodoComp/TodoList";

// const initialStateTodos = [
// 	{
// 		id: 1,
// 		title: "Go to job",
// 		completed: true,
// 	},
// 	{
// 		id: 2,
// 		title: "Go to the gym",
// 		completed: false,
// 	},
// 	{
// 		id: 3,
// 		title: "Finish js course",
// 		completed: false,
// 	},
// 	{
// 		id: 4,
// 		title: "Finish my homework",
// 		completed: false,
// 	},
// ];

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
	const [todos, setTodos] = useState(initialStateTodos);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const createTodo = (title) => {
		const newTodo = {
			id: Date.now(),
			title,
			completed: false,
		};

		setTodos([...todos, newTodo]);
	};

	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id != id));
	};

	const updateTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

	const clearCompleted = () => {
		setTodos(todos.filter((todo) => !todo.completed));
	};

	const [filter, setFilter] = useState("all");

	const changeFilter = (filter) => setFilter(filter);

	const filteredTodos = () => {
		switch (filter) {
			case "all":
				return todos;
			case "active":
				return todos.filter((todo) => !todo.completed);
			case "completed":
				return todos.filter((todo) => todo.completed);
			default:
				return todos;
		}
	};

	return (
		<>
			<div className="min-h-screen bg-gray-200
			bg-[url('./assets/images/bg-mobile-light.jpg')] 
			bg-contain bg-no-repeat transition-all duration-1000 
			dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
			md:bg-[url('./assets/images/bg-desktop-light.jpg')] 
			md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]"
			>
				<Header />

				<main className="container mx-auto mt-7 px-4 md:max-w-xl">
					<TodoCreate createTodo={createTodo} />

					<TodoList
						todos={filteredTodos()}
						removeTodo={removeTodo}
						updateTodo={updateTodo}
					/>

					<TodoComputed
						computedItemsLeft={computedItemsLeft}
						clearCompleted={clearCompleted}
					/>

					<TodoFilter changeFilter={changeFilter} filter={filter} />
				</main>
				<footer className="mt-8 text-center dark:text-gray-300">
					Drag and drop to reorder list
				</footer>
			</div>
		</>
	);
};

export default App;
