import { useEffect } from "react";

const useEscape = onEscape => {
	useEffect(() => {
		const handleEscEvent = event => {
			if (event.keyCode === 27) onEscape();
		};
		window.addEventListener("keydown", handleEscEvent);
	}, [onEscape]);
};

export default useEscape;
