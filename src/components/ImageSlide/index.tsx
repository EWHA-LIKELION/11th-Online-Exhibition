import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper.scss";
import "./image-slide.scss";

import img1 from "../../assets/images/about1.png";
import img2 from "../../assets/images/about2.jpg";
import img3 from "../../assets/images/about3.png";
import img4 from "../../assets/images/about4.png";
import img5 from "../../assets/images/about5.png";

const ImageSlide = () => {
	const [swiperIndex, setSwiperIndex] = useState<number>(0);
	SwiperCore.use([Autoplay]);
	return (
		<div className="image-slide-wrapper">
			<Swiper
				centeredSlides={true}
				loop={true}
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				onSlideChange={(index) => setSwiperIndex(index.activeIndex)}
			>
				{imageList.map((src, idx) => (
					<SwiperSlide key={src}>
						<img alt={src} src={src} />
					</SwiperSlide>
				))}
			</Swiper>
			<div className="scroll-track">
				<div className={`scroll-bar index${swiperIndex}`} />
			</div>
		</div>
	);
};

export default ImageSlide;

const imageList: string[] = [img1, img2, img3, img4, img5];
