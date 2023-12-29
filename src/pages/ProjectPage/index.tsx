import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import "./project-page.scss";

const ProjectPage = () => {
	const path = useLocation();
	useEffect(() => {
		document
			.querySelector("meta[name='theme-color']")
			?.setAttribute("content", "#F0EFED");
	}, []);
	return (
		<div className="project-page-wrapper">
			<Header
				text={
					path.pathname
						.replace("/", "")
						.replace(/^[a-z]/, (char) => char.toUpperCase()) + " Projects"
				}
				color="black"
			/>
		</div>
	);
};

export default ProjectPage;
