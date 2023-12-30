import "./modal.scss";
import { MouseEventHandler, useEffect } from "react";
import { ReactComponent as CloseIcon } from "../../assets/images/icon/close.svg";

type Props = {
	isOpen: boolean;
	closer: MouseEventHandler<HTMLDivElement | SVGSVGElement>;
};

const Modal = ({ isOpen, closer }: Props) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.cssText = `
              position: fixed;
              top: -${window.scrollY}px;
              overflow-y: scroll;
              width: 100%;`;
			return () => {
				const scrollY = document.body.style.top;
				document.body.style.cssText = "";
				window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
			};
		}
	}, [isOpen]);
	return (
		<>
			{isOpen ? (
				<div className="modal-wrapper">
					<div className="background" onClick={closer} />
					<div className="block">
						<CloseIcon className="xbtn" onClick={closer} />
						<div className="inner">
							<div className="title">
								지금은
								<br />
								모집 기간이
								<br />
								아닙니다
							</div>
							<div className="back">
								<span>(</span>
								<span>)</span>
							</div>
							<div className="bold">예상 모집시기</div>
							<div className="text">24년 2월 말 - 3월 초</div>
							<div className="bold">
								자세한 모집 관련 안내 사항은
								<br />
								이대 멋사 인스타그램 계정을 통해
								<br />
								확인해주시면 감사하겠습니다
							</div>
							<a
								href="https://www.instagram.com/likelion_ewha"
								target="_blank"
								className="text link"
							>
								@likelion_ewha
							</a>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default Modal;
