import Lottie from "react-lottie";
import data from "./light.json";

export default function LottieLight() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: data,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return <Lottie options={defaultOptions} width={484} height={860} />;
}
