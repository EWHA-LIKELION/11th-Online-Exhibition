import { useState, useEffect } from "react";
import MenuIcon from "../../components/MenuIcon";
import MenuBar from "../../components/MenuBar";

import "./main-page.scss";
import LottieLight from "../../assets/lottie/LottieLight";
import { ReactComponent as TitleImage } from "../../assets/images/title.svg";
import { ReactComponent as YearImage } from "../../assets/images/year.svg";

const MainPage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const body = document.querySelector("body");
	const theme = document.querySelector("meta[name='theme-color']");
	const handleResize = () => {
		if (body!.clientWidth <= 450 && !isMenuOpen)
			body!.setAttribute("style", "background-color: #252C37;");
		else body!.removeAttribute("style");
	};
	useEffect(() => {
		theme!.setAttribute("content", "#252C37");
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	useEffect(() => {
		handleResize();
		if (isMenuOpen) theme!.setAttribute("content", "#f64725");
		else setTimeout(() => theme!.setAttribute("content", "#252C37"), 450);
	}, [isMenuOpen]);

	return (
		<div className="main-page-wrapper">
			<LottieLight />
			<div className="overlayer">
				<TitleImage className="title-image" />
				<div className="text">( The Warmest Moment )</div>
				<YearImage className="year-image" />
			</div>
			<MenuIcon state={isMenuOpen} setState={setIsMenuOpen} />
			<MenuBar state={isMenuOpen} setState={setIsMenuOpen} />
		</div>
	);
};

export default MainPage;
