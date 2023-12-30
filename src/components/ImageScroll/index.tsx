import "./image-scroll.scss";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar } from "swiper";
import "swiper/swiper.scss";

const ImageScroll = ({ images }: { images: string[] }) => {
	SwiperCore.use([Scrollbar]);
	return (
		<div className="image-scroll-wrapper">
			<Swiper slidesPerView={"auto"} freeMode={true}>
				{images.map((src: string, idx: number) => (
					<SwiperSlide
						className={idx === images.length - 1 ? "last" : undefined}
						key={idx}
					>
						<div className="screen-rect" key={src}>
							<img alt={"projectdetail" + idx} src={src} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ImageScroll;
