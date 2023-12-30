import { useState } from "react";
import useBackgroundColor from "../../utils/useBackgroundColor";
import Header from "../../components/Header";
import Drawer from "../../components/Drawer";
import "./epilogue-page.scss";

const EpiloguePage = () => {
	const [openedPart, setOpenedPart] = useState<number>(0);
	const [isInitialClick, setIsInitialClick] = useState<boolean>(true);
	useBackgroundColor("black");
	return (
		<div className="epilogue-page-wrapper">
			<Header text="Epilogue" color="white" />
			{[1, 2, 3, 4].map((i) => (
				<Drawer
					part={i}
					openedPart={openedPart}
					setOpenedPart={setOpenedPart}
					isInitialClick={isInitialClick}
					setIsInitialClick={setIsInitialClick}
					key={i}
				/>
			))}
		</div>
	);
};

export default EpiloguePage;
