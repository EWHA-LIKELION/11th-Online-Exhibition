import { useState, useEffect } from "react";
import MenuIcon from "../../components/MenuIcon";
import MenuBar from "../../components/MenuBar";

import "./main-page.scss";
import LottieLight from "../../assets/lottie/LottieLight";
import { ReactComponent as TitleImage } from "../../assets/images/title.svg";
import { ReactComponent as TextImage } from "../../assets/images/text.svg";
import { ReactComponent as YearImage } from "../../assets/images/year.svg";
import useBackgroundColor from "../../utils/useBackgroundColor";

const MainPage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	useBackgroundColor("main", isMenuOpen);
	return (
		<div className="main-page-wrapper">
			<LottieLight />
			<div className="overlayer">
				<TitleImage className="title-image" />
				<TextImage className="text-image" />
				<YearImage className="year-image" />
			</div>
			<MenuIcon state={isMenuOpen} setState={setIsMenuOpen} />
			<MenuBar state={isMenuOpen} setState={setIsMenuOpen} />
		</div>
	);
};

export default MainPage;
