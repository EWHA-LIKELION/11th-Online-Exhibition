import React from "react";
import "./header.scss";

type Props = {
	text: string;
	color: "black" | "white" | "red";
};
const Header = ({ text, color }: Props) => {
	return (
		<div className="header-wrapper">
			<div className={`inner ${color}`}>{`( ${text} )`}</div>
		</div>
	);
};

export default Header;
