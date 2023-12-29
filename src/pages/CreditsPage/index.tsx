import { useEffect } from "react";
import Header from "../../components/Header";
import "./credits-page.scss";
import { ReactComponent as CreditsImage } from "../../assets/images/credits.svg";

const CreditsPage = () => {
	useEffect(() => {
		document
			.querySelector("meta[name='theme-color']")
			?.setAttribute("content", "#202020");
	}, []);
	return (
		<div className="credits-page-wrapper">
			<Header text="Credits" color="red" />
			<div className="container">
				<CreditsImage className="background" />
			</div>
			<div className="bottom" />
		</div>
	);
};

export default CreditsPage;
