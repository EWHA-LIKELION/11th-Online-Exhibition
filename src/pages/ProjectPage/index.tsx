import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useBackgroundColor from "../../utils/useBackgroundColor";
import Header from "../../components/Header";
import "./project-page.scss";
import { ProjectType, projectList } from "../../assets/data/project";

const ProjectPage = () => {
	useBackgroundColor("gray");
	const path = useLocation();
	const nav = useNavigate();
	const [clickedId, setClickedId] = useState<number>(0);
	const onClick = (id: number) => {
		if (clickedId === 0) {
			setClickedId(id);
			setTimeout(() => nav(path.pathname + "/" + id), 1400);
		}
	};
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
			<div className="des-text">blow out a candle which you want!</div>
			<div className="light-wrapper">
				{projectList[path.pathname.replace("/", "")].map(
					(item: ProjectType) => (
						<div
							key={item.id}
							className="light-container"
							onClick={() => onClick(item.id)}
						>
							<img src={item.image} alt={item.title} />
							<div
								className={clickedId === item.id ? "rect off" : "rect on"}
								style={
									clickedId === item.id
										? { marginLeft: item.left }
										: { marginTop: item.top, marginLeft: item.left }
								}
							/>
						</div>
					)
				)}
			</div>
			<div className="list-wrapper">
				{projectList[path.pathname.replace("/", "")].map(
					(item: ProjectType) => (
						<div
							key={item.id}
							className="list-item"
							onClick={() => nav(path.pathname + "/" + item.id)}
						>
							<div>{item.id}</div>
							<div>{item.title}</div>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default ProjectPage;
