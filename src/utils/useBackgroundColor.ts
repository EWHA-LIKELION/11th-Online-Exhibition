import { useEffect } from "react";

const useBackgroundColor = (
	color: "gray" | "black" | "main",
	isMenuOpen?: boolean
) => {
	const body = document.querySelector("body");
	const theme = document.querySelector("meta[name='theme-color']");

	const altColor = () =>
		color === "gray"
			? "#F0EFED"
			: color === "black"
			? "#202020"
			: color === "main"
			? "#252C37"
			: "";

	const handleResize = () => {
		if (body!.clientWidth <= 450 && !isMenuOpen)
			body!.setAttribute("style", `background-color: ${altColor()};`);
		else body!.removeAttribute("style");
	};

	useEffect(() => {
		theme!.setAttribute("content", altColor());
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		if (isMenuOpen !== undefined) {
			handleResize();
			if (isMenuOpen) theme!.setAttribute("content", "#F64725");
			else setTimeout(() => theme!.setAttribute("content", "#252C37"), 450);
		}
	}, [isMenuOpen]);
};

export default useBackgroundColor;
