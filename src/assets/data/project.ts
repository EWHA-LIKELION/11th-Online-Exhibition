import GradLight1 from "../images/project/grad_1.svg";
import GradLight2 from "../images/project/grad_2.svg";
import GradLight3 from "../images/project/grad_3.svg";
import HackLight1 from "../images/project/hack_1.svg";
import HackLight2 from "../images/project/hack_2.svg";
import HackLight3 from "../images/project/hack_3.svg";
import Grad1Thumbnail from "../images/project/detail/grad_1_thumbnail.png";
import Grad2Thumbnail from "../images/project/detail/grad_2_thumbnail.png";
import Grad3Thumbnail from "../images/project/detail/grad_3_thumbnail.png";
import Hack1Thumbnail from "../images/project/detail/hack_1_thumbnail.png";
import Hack2Thumbnail from "../images/project/detail/hack_2_thumbnail.png";
import Hack3Thumbnail from "../images/project/detail/hack_3_thumbnail.png";
import Grad1Detail1 from "../images/project/detail/grad_1_detail1.png";
import Grad1Detail2 from "../images/project/detail/grad_1_detail2.png";
import Grad1Detail3 from "../images/project/detail/grad_1_detail3.png";
import Grad1Detail4 from "../images/project/detail/grad_1_detail4.png";
import Grad2Detail1 from "../images/project/detail/grad_2_detail1.png";
import Grad2Detail2 from "../images/project/detail/grad_2_detail2.png";
import Grad2Detail3 from "../images/project/detail/grad_2_detail3.png";
import Grad3Detail1 from "../images/project/detail/grad_3_detail1.png";
import Grad3Detail2 from "../images/project/detail/grad_3_detail2.png";
import Grad3Detail3 from "../images/project/detail/grad_3_detail3.png";
import Grad3Detail4 from "../images/project/detail/grad_3_detail4.png";
import Grad3Detail5 from "../images/project/detail/grad_3_detail5.png";
import Grad3Detail6 from "../images/project/detail/grad_3_detail6.png";
import Grad3Detail7 from "../images/project/detail/grad_3_detail7.png";
import Hack1Detail1 from "../images/project/detail/hack_1_detail1.png";
import Hack1Detail2 from "../images/project/detail/hack_1_detail2.png";
import Hack1Detail3 from "../images/project/detail/hack_1_detail3.png";
import Hack1Detail4 from "../images/project/detail/hack_1_detail4.png";
import Hack1Detail5 from "../images/project/detail/hack_1_detail5.png";
import Hack1Detail6 from "../images/project/detail/hack_1_detail6.png";
import Hack2Detail1 from "../images/project/detail/hack_2_detail1.png";
import Hack2Detail2 from "../images/project/detail/hack_2_detail2.png";
import Hack2Detail3 from "../images/project/detail/hack_2_detail3.png";
import Hack3Detail1 from "../images/project/detail/hack_3_detail1.png";
import Hack3Detail2 from "../images/project/detail/hack_3_detail2.png";
import Hack3Detail3 from "../images/project/detail/hack_3_detail3.png";
import Hack3Detail4 from "../images/project/detail/hack_3_detail4.png";
import Hack3Detail5 from "../images/project/detail/hack_3_detail5.png";
import Hack3Detail6 from "../images/project/detail/hack_3_detail6.png";

export type ProjectType = {
	id: number;
	title: string;
	image: string;
	top: number;
	left: number;
};
type ProjectListType = {
	[key: string]: ProjectType[];
};
export const projectList: ProjectListType = {
	graduation: [
		{
			id: 1,
			title: "drag on",
			image: GradLight1,
			top: 2,
			left: 0,
		},
		{
			id: 2,
			title: "nae-chin-man",
			image: GradLight2,
			top: 2,
			left: 0,
		},
		{
			id: 3,
			title: "what do you sing",
			image: GradLight3,
			top: 5,
			left: 17,
		},
	],
	hackathon: [
		{
			id: 1,
			title: "bora",
			image: HackLight1,
			top: 6,
			left: 4,
		},
		{
			id: 2,
			title: "wallethy",
			image: HackLight2,
			top: 15,
			left: 20,
		},
		{
			id: 3,
			title: "verny",
			image: HackLight3,
			top: 4,
			left: -12,
		},
	],
};

export const graduationProjectList = [
	{
		id: 1,
		name: "Drag on",
		thumbnail: Grad1Thumbnail,
		sentence: "2024 목표 드래곤볼 시작 🐲 하나씩 drag - 체크 on ✔️",
		description: `Drag-on 은 용의 해 2024년을 맞이하며, 새로운 목표 달성을 응원하고자 하는 마음에서 탄생했습니다🐉 마치 여의주를 모으듯 목표를 하나씩 모아 드래곤볼을 완성해 보세요🔮 

		목표를 향해 가던 중 넘어져도, drag-on 에서는 괜찮아요! ‘메꾸기’ 기능으로 다시 일어나고, 내 페이스에 맞게 목표를 조정할 수 있어요💪🏻
		
		하루 하루 목표를 모아 나가는 재미에 푹 빠지다보면, 어느새 나의 2024년이 보람지게 완성되어 있을거예요. 🍀`,
		images: [Grad1Detail1, Grad1Detail2, Grad1Detail3, Grad1Detail4],
		website: "https://drag-on.swygbro.com",
		github: "https://github.com/11th-LikeLion-DragOn",
		members: {
			pmdesign: ["김지형", "임수민"],
			frontend: ["김가영", "이다빈"],
			backend: ["심예원", "이지원"],
		},
	},
	{
		id: 2,
		name: "Nae-chin-man",
		thumbnail: Grad2Thumbnail,
		sentence: "내 친구가 알려주는 믿을 만한 숨은 맛집, 내친만지도",
		description: `"내 친구들이 아는 로컬 맛집을 알고 싶어요!"
		"광고물 먹은 투어리스트, 블로거가 아닌! 진짜 여행 장인이 아는 그곳의 명소, 음식점을 알고 싶어요!"
		
		내친만지도에서는 나만의 지도를 만들고, 지도의 링크를 공유해 친구가 추천해 주는 장소를 공유받을 수 있어요. 지도 위에 친구가 남긴 포스트잇을 통해서는 단순히 어떤 장소가 여행 지역의 핫플인지에 대한 정보를 넘어서서, 어떤 부분들이 좋았고 특히나 만족스러웠던 포인트는 뭐였는지에 대한 "세세한 내용까지" 알 수 있답니다!`,
		images: [Grad2Detail1, Grad2Detail2, Grad2Detail3],
		website: "https://naechinman.swygbro.com",
		github: "https://github.com/LikeLion02Graduation",
		members: {
			pmdesign: ["손예원", "이시은"],
			frontend: ["유서연", "진규빈"],
			backend: ["이혜지", "허채린"],
		},
	},
	{
		id: 3,
		name: "What Do You Sing",
		thumbnail: Grad3Thumbnail,
		sentence:
			"당신은 지금 어떤 이야기를 노래하나요? 나만의 해석을 덧붙인 가사 탐색 서비스",
		description: `<왓두유씽?>은 혼자 흥얼거리기 아까웠던 가사를 인용해서 소개할 수 있는 서비스예요. 내가 좋아하는 가사를 나만의 해석을 덧붙여 소개하고, 탐색을 통해 발견한 마음에 드는 가사는 북마크로 저장하거나 이미지를 통해 공유해 보세요. 가사에 대한 감정 표현이나 끊임없이 남길 수 있는 좋아요, 댓글 등을 통해 가사에 대한 생각을 공유하고, 직접 들어보고 싶은 노래 가사는 ‘이 노래 들으러 가기'를 통해 바로 감상할 수 있어요.`,
		images: [
			Grad3Detail1,
			Grad3Detail2,
			Grad3Detail3,
			Grad3Detail4,
			Grad3Detail5,
			Grad3Detail6,
			Grad3Detail7,
		],
		website: "https://whatdoyousing.swygbro.com",
		github: "https://github.com/WhatDoYouSing",
		members: {
			pmdesign: ["이지민", "이채원"],
			frontend: ["변지혜", "최지원"],
			backend: ["김지은", "박나담", "윤서아"],
		},
	},
];
export const hackathonProjectList = [
	{
		id: 1,
		name: "Bora",
		thumbnail: Hack1Thumbnail,
		sentence: "세대 갈등을 해소할 수 있는 아티클 기반 각주 콘텐츠 플랫폼",
		description: `디지털 격차는 세대 간의 적극적 소통을 막는 장벽이 되고 있습니다. alpha 및 Z세대는 디지털 리터러시와 문해력 저하를 경험하고 있고, 시니어 세대는 사회적 소외와 단절을 경험하고 있습니다. 

		이에, '창밖을보라'는 이성적 의사소통이 가능한 양질의 글을 제공하고, 각자의 시선에서 의견을 교류할 수 있는 장을 만들어 세대 간 소통을 활성화 시킵니다. 또한, 디지털 콘텐츠에 대한 접근성이 낮은 시니어 세대를 위해 청각 기반의 서비스도 제공합니다.`,
		images: [
			Hack1Detail1,
			Hack1Detail2,
			Hack1Detail3,
			Hack1Detail4,
			Hack1Detail5,
			Hack1Detail6,
		],
		website: "https://bora-the-window.vercel.app",
		github: "https://github.com/BORA-team1",
		members: {
			pmdesign: ["손예원", "이지민"],
			frontend: ["변지혜", "유서연"],
			backend: ["박나담", "허채린"],
		},
	},
	{
		id: 2,
		name: "Wallethy",
		thumbnail: Hack2Thumbnail,
		sentence: "NFT 보안을 기반으로한 국민 의료 정보 통합 관리 서비스",
		description: `우리의 서비스 목표는 스마트폰이나 개인 PC를 통해 사용자에게 모든 의료 정보를 간편하게 통합하고 관리할 수 있는 환경을 제공하는 것입니다.
		“병원만을 위한 의무기록”을 넘어서 대한민국의 의료 정보 시스템을 혁신적으로 발전시키며, EMR 5단계로의 진화를 이뤄내고자 합니다.
		개인 환자들이 자신만의 건강 데이터 저장소를 소유하며, 자신의 정보를 안전하게 보관하고 활용할 수 있는 신뢰할 수 있는 환경을 구축하겠습니다.`,
		images: [Hack2Detail1, Hack2Detail2, Hack2Detail3],
		website: "https://wallethy.vercel.app",
		github: "https://github.com/binys21/11th-Hackerthon-2023",
		members: {
			pmdesign: ["김지형", "이시은"],
			frontend: ["이다빈", "최지원"],
			backend: ["김지은", "이지원"],
		},
	},
	{
		id: 3,
		name: "Verny",
		thumbnail: Hack3Thumbnail,
		sentence:
			"문화 공공서비스 디지털 격차 해소를 위한 미술품 해설 및 문화예술 소개 배리어프리 플랫폼",
		description: `베르니(Verny)는 스크린리더를 사용하는 시각장애인의 접근성을 고려한 미술품 해설 및 문화예술 소개 배리어프리 플랫폼입니다. 미술 탭에서는 고전·현대미술품과, 음성해설문 가이드라인을 따라 작성된 기술(Description) 및 해석을 감상할 수 있고, 커뮤니티 기능을 통해 감상을 확장할 수 있습니다. 문예관광지도 탭에서는 배리어프리 문화예술관광지 정보를 검색하고 확인할 수 있습니다. 서비스 내 모든 텍스트는 스크린리더로 접근이 가능합니다.`,
		images: [
			Hack3Detail1,
			Hack3Detail2,
			Hack3Detail3,
			Hack3Detail4,
			Hack3Detail5,
			Hack3Detail6,
		],
		website: "https://verny.vercel.app",
		github: "https://github.com/2023-Hackathon-Team3",
		members: {
			pmdesign: ["이채원"],
			frontend: ["김가영", "진규빈"],
			backend: ["심예원", "윤서아", "이혜지"],
		},
	},
];
