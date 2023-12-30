import React from "react";

const useParagraph = (content: string) =>
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

export default useParagraph;
