import CrossIcon from "./components/Icons/CrossIcon";
import MoonIcon from "./components/Icons/MoonIcon";

const App = () => {
	return (
		<>
			<div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
				<header className="container mx-auto px-4  ">
					<div className="flex justify-between pt-8">
						<h1 className="text-3xl font-bold uppercase tracking-[0.4em] text-white">
							Todo
						</h1>
						<button>
                     <MoonIcon fill="#fff" />
                  </button>
					</div>
					<form className="mt-7 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-3">
						<span className="inline-block h-5 w-5 rounded-full border-2"></span>
						<input
							className="w-full text-gray-400 outline-none"
							type="text"
							placeholder="Create new todo..."
						/>
					</form>
				</header>
				<main className="container mx-auto mt-7 px-4">
					<div className="rounded-md bg-white [&>article]:p-4">
						<article className="flex items-center gap-4 border-b border-b-gray-400">
							<button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
							<p className="grow text-gray-400">
								Complete online JavaScript curse in bluuweb
							</p>
							<button className="flex-none">
								<CrossIcon />
							</button>
						</article>
						<article className="flex items-center gap-4 border-b border-b-gray-400">
							<button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
							<p className="grow text-gray-400">
								Complete online JavaScript curse in bluuweb
							</p>
							<button className="flex-none">
								<CrossIcon />
							</button>
						</article>
						<article className="flex items-center gap-4 border-b border-b-gray-400">
							<button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
							<p className="grow text-gray-400">
								Complete online JavaScript curse in bluuweb
							</p>
							<button className="flex-none">
								<CrossIcon />
							</button>
						</article>
						<section className="flex justify-between px-4 py-4 ">
							<span className="text-gray-400">5 items</span>
							<button className="text-gray-400">
								Clear Completed
							</button>
						</section>
					</div>
				</main>
				<section className="container mx-auto mt-8 px-4">
					<div className="bg-white p-4 rounded-md flex justify-center gap-9">
						<button className="hover:text-blue-600">All</button>
						<button className="hover:text-blue-600">Active</button>
						<button className="hover:text-blue-600">Completed</button>
					</div>
				</section>
				<p className="text-center mt-8">Drag and drop to reorder list</p>
			</div>
		</>
	);
};

export default App;
