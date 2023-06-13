import { useEffect, useRef, useState } from "react";
import MoonIcon from "../Icons/MoonIcon";
import SunIcon from "../Icons/SunIcon";

const initialStateDarkMode = localStorage.getItem('theme') === 'dark';

const Header = () => {

	const [darkMode, setDarkMode] = useState(initialStateDarkMode);

	// const refHeader = useRef(null);  debe de estar dentro de las props de header---->ref={refHeader}

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark")
			localStorage.setItem('theme', 'dark');
			// refHeader.current.classList.add("bg-gray-900")
		} else {
			document.documentElement.classList.remove("dark")
			localStorage.setItem('theme', 'light');
		}
	}, [darkMode])

	return (
		<header className="container mx-auto px-4 md:max-w-xl">
			<div className="flex justify-between pt-8">
				<h1 className="text-3xl font-bold uppercase tracking-[0.4em] text-white">
					Todo
				</h1>
				<button onClick={() => setDarkMode(!darkMode)}>
					{
						darkMode ? <SunIcon /> : <MoonIcon />
					}
				</button>
			</div>
		</header>
	);
};

export default Header;
 