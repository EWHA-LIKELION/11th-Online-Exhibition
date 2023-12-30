import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Drawer from "../../components/Drawer";
import "./epilogue-page.scss";

const EpiloguePage = () => {
	const [openedPart, setOpenedPart] = useState<number>(0);
	useEffect(() => {
		document
			.querySelector("meta[name='theme-color']")
			?.setAttribute("content", "#202020");
	}, []);
	return (
		<div className="epilogue-page-wrapper">
			<Header text="Epilogue" color="white" />
			{[1, 2, 3, 4].map((i) => (
				<Drawer
					part={i}
					openedPart={openedPart}
					setOpenedPart={setOpenedPart}
					key={i}
				/>
			))}
		</div>
	);
};

export default EpiloguePage;
