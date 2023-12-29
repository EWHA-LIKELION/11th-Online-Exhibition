import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./menu-bar.scss";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

type Props = {
	state: boolean;
	setState: (value: boolean) => void;
};
const MenuBar = ({ state, setState }: Props) => {
	const nav = useNavigate();
	const onClick = (item: string) => {
		setState(false);
		nav(`/${item.toLowerCase()}`);
	};
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
					<li key={item} onClick={() => onClick(item)}>
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
