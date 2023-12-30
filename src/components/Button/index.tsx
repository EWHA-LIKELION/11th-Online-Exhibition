import React from "react";
import "./button.scss";

type Props = {
	text: string;
	onClick: (value?: any) => void;
	isFloating?: boolean;
};
const Button = ({ text, onClick, isFloating }: Props) => {
	return (
		<div className="button-wrapper">
			{isFloating ? (
				<a href="/" target="_blank" className="inner" onClick={onClick}>
					{text}
				</a>
			) : (
				<div className="inner" onClick={onClick}>
					{text}
				</div>
			)}
		</div>
	);
};

export default Button;
