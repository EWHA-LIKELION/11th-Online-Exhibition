import "./menu-icon.scss";

type Props = {
	state: boolean;
	setState: (value: boolean) => void;
};
const MenuIcon = ({ state, setState }: Props) => {
	return (
		<div className="menu-icon-wrapper">
			<div
				className={`button${state ? " active" : ""}`}
				onClick={() => setState(!state)}
			>
				<span aria-hidden="true"></span>
			</div>
		</div>
	);
};

export default MenuIcon;
