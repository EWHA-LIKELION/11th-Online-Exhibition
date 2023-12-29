import { useEffect } from "react";
import Header from "../../components/Header";
import ImageSlide from "../../components/ImageSlide";
import TitleSection from "../../components/TitleSection";
import Footer from "../../components/Footer";
import "./about-page.scss";
import Button from "../../components/Button";

const AboutPage = () => {
	useEffect(() => {
		document
			.querySelector("meta[name='theme-color']")
			?.setAttribute("content", "#F0EFED");
	}, []);
	return (
		<div className="about-page-wrapper">
			<Header text="Likelion Ewha 11th" color="black" />
			<ImageSlide />
			<div className="info-container">
				<TitleSection text="Introduction" />
				<TitleSection text="Curriculum" isAddInfo={true} />
				<TitleSection text="Acitivity Record" />
			</div>
			<Button text="멋쟁이사자처럼 12기 아기사자 모집 →" />
			<Footer />
		</div>
	);
};

export default AboutPage;
