import { useEffect, useState } from "react";
import "./drawer.scss";
import { data } from "../../assets/data/epilogue";

type Props = {
	part: number; // 1 PM 2 FE 3 BE 4 STAFF
	openedPart: number;
	setOpenedPart: (value: number) => void;
};
const Drawer = ({ part, openedPart, setOpenedPart }: Props) => {
	const [currentData, setCurrentData] = useState<any[]>(data[part - 1]);
	const [clickedName, setClickedName] = useState<number>(1);
	const [className, setClassName] = useState<string>("close");
	useEffect(() => {
		setCurrentData(data[part - 1]);
		if (part === openedPart)
			setTimeout(() => {
				setClassName("open");
			}, 1600);
		else setClassName("close");
	}, [openedPart]);

	const altPart = (id: number) =>
		id === 1
			? "PM·Design"
			: id === 2
			? "Front-End"
			: id === 3
			? "Back-End"
			: "Staff";
	const splitRender = (content: string) =>
		content.includes("\n") ? (
			content.split("\n").map((line, idx) => (
				<span key={idx}>
					{line}
					<br />
				</span>
			))
		) : (
			<span>{content}</span>
		);

	return (
		<div className="drawer-wrapper">
			<div className="title-box" onClick={() => setOpenedPart(part)}>
				<div>{altPart(part)}</div>
				<div>{currentData.length}</div>
			</div>
			<div className={"content-box " + className}>
				<div className="name-container">
					{currentData.map((item) => (
						<div
							className={clickedName === item.id ? "clicked name" : "name"}
							onClick={() => setClickedName(item.id)}
							key={item.id}
						>
							{item.name}
						</div>
					))}
				</div>
				<div className="content">
					{splitRender(currentData[clickedName - 1].content)}
				</div>
				<div className="info">
					<div className="role">{`11기 ${
						part === 1
							? "기획디자인"
							: part === 2
							? "프론트엔드"
							: part === 3
							? "백엔드"
							: currentData[clickedName - 1].role
					}`}</div>
					<div className="major">{currentData[clickedName - 1].major}</div>
					<div className="name">{currentData[clickedName - 1].name}</div>
				</div>
			</div>
		</div>
	);
};

export default Drawer;
