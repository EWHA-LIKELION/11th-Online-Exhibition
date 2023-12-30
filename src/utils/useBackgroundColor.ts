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
			? "#222834"
			: "";

	const setBgColor = () => {
		if (body!.clientWidth <= 450) {
			if (!isMenuOpen)
				body!.setAttribute("style", `background-color: ${altColor()};`);
			else if (color === "main" && isMenuOpen)
				body!.setAttribute("style", `background-color: #F64725;`);
		} else body!.removeAttribute("style");
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		theme!.setAttribute("content", altColor());
		setBgColor();
		window.addEventListener("resize", setBgColor);
		return () => {
			window.removeEventListener("resize", setBgColor);
		};
	}, []);

	useEffect(() => {
		if (color === "main") {
			setBgColor();
			if (isMenuOpen) theme!.setAttribute("content", "#F64725");
			else setTimeout(() => theme!.setAttribute("content", "#222834"), 430);
		}
	}, [isMenuOpen]);
};

export default useBackgroundColor;
