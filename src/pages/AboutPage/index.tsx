import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import ImageSlide from "../../components/ImageSlide";
import TitleSection from "../../components/TitleSection";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import "./about-page.scss";
import { curriculumList, activityList } from "../../assets/data/about";

const AboutPage = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [selectedPart, setSelectedPart] = useState<number>(0);
	useEffect(() => {
		document
			.querySelector("meta[name='theme-color']")
			?.setAttribute("content", "#F0EFED");
	}, []);
	return (
		<>
			<div className="about-page-wrapper">
				<Header text="Likelion Ewha 11th" color="black" />
				<ImageSlide />
				<div className="info-container">
					<TitleSection text="Introduction" />
					<div className="flex">
						<div className="left">활동 기간</div>
						<div className="right">2023.02 - 2024.01</div>
					</div>
					<div className="border" />
					<div className="flex des">
						<div className="left">소개</div>
						<div className="right">
							GROWL TO GROWTH🦁 멋쟁이사자처럼은 국내외 121개 대학, 4천여 명이
							활동하는 국내 최대 규모의 IT 창업 연합 동아리입니다. 이화여대
							멋쟁이사자처럼 11기는 7명의 운영진과 19명의 아기사자로 구성되어
							있으며, 기획디자인, 백엔드, 프론트엔드로 트랙을 나누어 활동을
							진행했습니다.
						</div>
					</div>
					<TitleSection text="Curriculum" isAddInfo={true} />
					<div className="part-container">
						{curriculumList.map((item, idx) => (
							<div
								className={`part${idx === selectedPart ? " clicked" : ""}`}
								onClick={() => setSelectedPart(idx)}
							>
								{item.part}
							</div>
						))}
					</div>
					<div className="border" />
					{curriculumList[selectedPart].content.map(
						(
							item: { id: number; left: string; right: string },
							idx: number
						) => (
							<React.Fragment key={item.id}>
								<div className="flex">
									<div className="left">{item.left}</div>
									<div className="right">{item.right}</div>
								</div>
								{idx !== curriculumList[selectedPart].content.length - 1 && (
									<div className="border" />
								)}
							</React.Fragment>
						)
					)}
					<TitleSection text="Acitivity Record" />
					{activityList.map((item) => (
						<React.Fragment key={item.id}>
							<div className="flex">
								<div className="left">{item.left}</div>
								<div className="right">{item.right}</div>
							</div>
							<div className="border" />
						</React.Fragment>
					))}
				</div>
				<Button
					text="멋쟁이사자처럼 12기 아기사자 모집 →"
					onClick={() => setIsModalOpen(true)}
				/>
				<Footer />
			</div>
			<Modal isOpen={isModalOpen} closer={() => setIsModalOpen(false)} />
		</>
	);
};

export default AboutPage;
