import React, { useState, useEffect } from "react";
import MenuIcon from "../../components/MenuIcon";
import MenuBar from "../../components/MenuBar";

import "./main-page.scss";
import LottieLight from "../../assets/lottie/LottieLight";
import { ReactComponent as TitleImage } from "../../assets/images/title.svg";
import { ReactComponent as YearImage } from "../../assets/images/year.svg";

const MainPage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	useEffect(() => {
		if (isMenuOpen)
			document
				.querySelector("meta[name='theme-color']")
				?.setAttribute("content", "#f64725");
		else
			setTimeout(
				() =>
					document
						.querySelector("meta[name='theme-color']")
						?.setAttribute("content", "#1E252F"),
				450
			);
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
			<MenuBar state={isMenuOpen} />
		</div>
	);
};

export default MainPage;
