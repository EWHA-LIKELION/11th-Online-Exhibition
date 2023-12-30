import { useEffect, useState, useRef } from "react";
import useParagraph from "../../utils/useParagraph";
import "./drawer.scss";
import { data } from "../../assets/data/epilogue";

type Props = {
	part: number; // 1 PM 2 FE 3 BE 4 STAFF
	openedPart: number;
	setOpenedPart: (value: number) => void;
	isInitialClick: boolean;
	setIsInitialClick: (value: boolean) => void;
};
const Drawer = ({
	part,
	openedPart,
	setOpenedPart,
	isInitialClick,
	setIsInitialClick,
}: Props) => {
	const [currentData, setCurrentData] = useState<any[]>(data[part - 1]);
	const [clickedName, setClickedName] = useState<number>(1);
	const [className, setClassName] = useState<string>("close");
	const partRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		setCurrentData(data[part - 1]);
		if (part === openedPart) {
			partRef!.current?.setAttribute(
				"style",
				"background-color: rgba(255, 255, 255, 0.1); transition: 0.1s;"
			);
			setTimeout(
				() =>
					partRef!.current?.setAttribute(
						"style",
						"background-color: transparent; transition: 0.3s;"
					),
				200
			);
		}
		if (isInitialClick) {
			if (part === openedPart) {
				setClassName("open");
				setIsInitialClick(false);
			}
		} else {
			if (part === openedPart)
				setTimeout(() => {
					setClassName("open");
				}, 1100);
			else setClassName("close");
		}
	}, [openedPart]);

	const altPart = (id: number) =>
		id === 1
			? "PM·Design"
			: id === 2
			? "Front-End"
			: id === 3
			? "Back-End"
			: "Staff";

	return (
		<div className="drawer-wrapper">
			<div
				className="title-box"
				ref={partRef}
				onClick={() => setOpenedPart(part)}
			>
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
					{useParagraph(currentData[clickedName - 1].content)}
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
