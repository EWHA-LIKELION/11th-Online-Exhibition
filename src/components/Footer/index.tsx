import "./footer.scss";
import { ReactComponent as LikelionIcon } from "../../assets/images/icon/likelion.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/icon/instagram.svg";
import { ReactComponent as GithubIcon } from "../../assets/images/icon/github.svg";

const Footer = () => {
	return (
		<div className="footer-wrapper">
			<div className="icon-container">
				<a href="https://linktr.ee/likelion.ewha" target="_blank">
					<LikelionIcon />
				</a>
				<a href="https://www.instagram.com/likelion_ewha" target="_blank">
					<InstagramIcon />
				</a>
				<a href="https://github.com/EWHA-LIKELION" target="_blank">
					<GithubIcon />
				</a>
			</div>
			<div className="text">
				Copyright ⓒ Likelion Ewha 11th. All Rights Reserved.
			</div>
		</div>
	);
};

export default Footer;
