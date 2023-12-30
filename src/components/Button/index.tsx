import React from "react";
import "./button.scss";

type Props = {
	text: string;
	onClick?: (value?: any) => void;
	url?: string;
	isFloating?: boolean;
};
const Button = ({ text, onClick, url, isFloating }: Props) => {
	return (
		<div className="button-wrapper">
			{url ? (
				<a
					href={url}
					target="_blank"
					className={`btn${isFloating ? " float" : ""}`}
				>
					{text}
				</a>
			) : (
				<div className="btn" onClick={onClick}>
					{text}
				</div>
			)}
		</div>
	);
};

export default Button;
