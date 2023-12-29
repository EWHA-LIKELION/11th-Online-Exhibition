import React from "react";
import "./button.scss";

type Props = {
	text: string;
	isFloating?: boolean;
};
const Button = ({ text }: Props) => {
	return (
		<div className="button-wrapper">
			{/* <a href="/" className="inner">
				{text}
			</a> */}
			<div className="inner">{text}</div>
		</div>
	);
};

export default Button;
