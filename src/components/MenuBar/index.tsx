import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./menu-bar.scss";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const MenuBar = ({ state }: { state: boolean }) => {
	const nav = useNavigate();
	const [className, setClassName] = useState<string>(
		"menu-bar menu-bar-hidden"
	);
	useEffect(() => {
		if (state) setTimeout(() => setClassName("menu-bar menu-bar-active"), 100);
		else {
			setClassName("menu-bar");
			setTimeout(() => setClassName("menu-bar menu-bar-hidden"), 700);
		}
	}, [state]);
	return (
		<div className={className}>
			<Logo className="logo-image" />
			<div className="content">
				{menuList.map((item) => (
					<li key={item} onClick={() => nav(`/${item.toLowerCase()}`)}>
						{item}
					</li>
				))}
			</div>
		</div>
	);
};

export default MenuBar;

const menuList: string[] = [
	"ABOUT",
	"HACKATHON",
	"GRADUATION",
	"EPILOGUE",
	"CREDITS",
];
