import { useEffect } from "react";
import Header from "../../components/Header";
import "./epilogue-page.scss";

const EpiloguePage = () => {
	useEffect(() => {
		document
			.querySelector("meta[name='theme-color']")
			?.setAttribute("content", "#202020");
	}, []);
	return (
		<div className="epilogue-page-wrapper">
			<Header text="Epilogue" color="white" />
		</div>
	);
};

export default EpiloguePage;
