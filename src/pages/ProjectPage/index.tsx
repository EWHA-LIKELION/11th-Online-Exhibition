import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useBackgroundColor from "../../utils/useBackgroundColor";
import Header from "../../components/Header";

import "./project-page.scss";
import { ReactComponent as GradLight1 } from "../../assets/images/project/grad_1.svg";
import { ReactComponent as GradLight2 } from "../../assets/images/project/grad_2.svg";
import { ReactComponent as GradLight3 } from "../../assets/images/project/grad_3.svg";
import { ReactComponent as HackLight1 } from "../../assets/images/project/hack_1.svg";
import { ReactComponent as HackLight2 } from "../../assets/images/project/hack_2.svg";
import { ReactComponent as HackLight3 } from "../../assets/images/project/hack_3.svg";

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
							{item.image}
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

type ProjectType = {
	id: number;
	title: string;
	image: JSX.Element;
	top: number;
	left: number;
};
const projectList: any = {
	graduation: [
		{
			id: 1,
			title: "drag on",
			image: <GradLight1 />,
			top: 4,
			left: -2,
		},
		{
			id: 2,
			title: "friend-ed map",
			image: <GradLight2 />,
			top: 2,
			left: 0,
		},
		{
			id: 3,
			title: "what do you sing",
			image: <GradLight3 />,
			top: 5,
			left: 16,
		},
	],
	hackathon: [
		{
			id: 1,
			title: "bora",
			image: <HackLight1 />,
			top: 6,
			left: 4,
		},
		{
			id: 2,
			title: "wallethy",
			image: <HackLight2 />,
			top: 12,
			left: 20,
		},
		{
			id: 3,
			title: "verny",
			image: <HackLight3 />,
			top: 4,
			left: -12,
		},
	],
};
