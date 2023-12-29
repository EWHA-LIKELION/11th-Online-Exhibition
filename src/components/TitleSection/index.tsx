import React from "react";
import "./title-section.scss";

type Props = {
	text: string;
	isAddInfo?: boolean;
	isGitHub?: boolean;
	url?: string;
};
const TitleSection = ({ text, isAddInfo, isGitHub, url }: Props) => {
	return (
		<div className="title-section-wrapper">
			<div className="text">{text}</div>
			{isAddInfo && (
				<div className="des-text">
					* 11기 기준으로, 12기와는 상이할 수 있습니다.
				</div>
			)}
			{isGitHub && (
				<a href={url} target="_blank" className="github-btn">
					GitHub
				</a>
			)}
		</div>
	);
};

export default TitleSection;
