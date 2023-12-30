import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useParagraph from "../../utils/useParagraph";
import useBackgroundColor from "../../utils/useBackgroundColor";

import Header from "../../components/Header";
import TitleSection from "../../components/TitleSection";
import ImageScroll from "../../components/ImageScroll";
import Button from "../../components/Button";
import "./project-detail-page.scss";
import {
	graduationProjectList,
	hackathonProjectList,
} from "../../assets/data/project";

const ProjectDetailPage = () => {
	const { id } = useParams();
	const [currentProject, setCurrentProject] = useState<any>(
		window.location.pathname.includes("hackathon")
			? hackathonProjectList[Number(id) - 1]
			: graduationProjectList[Number(id) - 1]
	);
	useEffect(() => {
		setCurrentProject(
			window.location.pathname.includes("hackathon")
				? hackathonProjectList[Number(id) - 1]
				: graduationProjectList[Number(id) - 1]
		);
	}, [id]);
	useBackgroundColor("gray");
	return (
		<div className="project-detail-page-wrapper">
			<Header text={currentProject.name} color="black" />
			<div className="container">
				<div className="img-rect">
					<img alt={currentProject.name} src={currentProject.thumbnail} />
				</div>
				<TitleSection text="Introduction" />
				<div className="sentence">{currentProject.sentence}</div>
				<div className="description">
					{useParagraph(currentProject.description)}
				</div>
			</div>
			<ImageScroll images={currentProject.images} />
			<div className="container">
				<TitleSection
					text="Members"
					isGitHub={true}
					url={currentProject.github}
				/>
				{["pmdesign", "frontend", "backend"].map((item) => (
					<div className="flex" key={item}>
						<div className="left">
							{item === "pmdesign"
								? "기획·디자인"
								: item === "frontend"
								? "프론트엔드"
								: "백엔드"}
						</div>
						<div className="right">
							{currentProject.members[item].map((name: string) => (
								<div className="name" key={name}>
									{name}
								</div>
							))}
						</div>
					</div>
				))}
			</div>
			<Button
				text="웹사이트 방문하기 →"
				isFloating={true}
				url={currentProject.website}
			/>
		</div>
	);
};

export default ProjectDetailPage;
