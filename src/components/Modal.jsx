import React from "react";
import ReactDOM from "react-dom";
import papyrus from "../assets/papyrus.png";
import lotus from "../assets/lotus2.png";
import gem from "../assets/buttons/Indicaza_psychedelic_UI_large_button_mandala_sacred_geometry_fr_f80238af-7d8d-44b2-b222-ab88e19ceaa9.png";
import img from "../assets/background/Indicaza_ancient_monolithic_temple_on_top_of_a_mountain_Machu_P_f7d5fe9d-a182-42f0-af30-53b594891b86.png";
// import github from "../assets/github.svg";
// import web from "../assets/globe.svg";

const Modal = ({ open, onClose }) => {
	if (!open) return null;
	return ReactDOM.createPortal(
		<div
			onClick={onClose}
			className="relative flex
            h-screen w-screen items-center
            justify-center bg-secondary
            bg-opacity-50
            "
		>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className="flex flex-col items-center justify-center bg-secondary"
			>
				{/* <button
					className="btn justify-start"
					onClick={onClose}
				>
					X
				</button> */}
				{/* <div className="relative flex h-[1024px] w-full flex-col items-center justify-center overflow-hidden bg-white text-left font-kefa text-[48px] text-black"> */}
				<div className="relative h-[850px] w-[800px]">
					<div className="absolute bottom-[8px] left-[7px] right-[8px] top-[7px] h-[calc(100%_-_15px)] w-[calc(100%_-_15px)] rounded-31xl bg-gray-300 opacity-75 [backdrop-filter:blur(10px)]" />
					<div
						className="absolute bottom-[94px] left-[calc(50%_-_320px)] top-[540px] h-[calc(100%_-_634px)] max-h-full w-[639px] bg-primary opacity-20"
						alt=""
						// src="/textbackdrop.svg"
					/>
					<img
						className="absolute bottom-[-15.5px] left-[-9.5px] right-[-11.5px] top-[-5.5px] h-[calc(100%_+_21px)] max-h-full w-[calc(100%_+_21px)] max-w-full overflow-hidden rounded-31xl object-cover opacity-75"
						alt=""
						src={papyrus}
					/>
					<div className="absolute bottom-[41.18%] left-[8.25%] right-[8.34%] top-[12%] flex h-[46.82%] w-[83.41%] flex-col items-center justify-center">
						<div className="relative h-[398px] shrink-0 self-stretch overflow-hidden">
							<div className="absolute left-[calc(50%_-_334.64px)] top-[calc(50%_-_165.39px)] box-border h-[330.78px] w-[669.29px] rounded-3xs border-[1px] border-solid border-black bg-gray-200 opacity-[0.75] [backdrop-filter:blur(10px)]" />
							<img
								className="absolute left-[calc(50%_-_320.6px)] top-[calc(50%_-_182.7px)] h-[365.39px] w-[641.19px] rounded-3xs opacity-[0.75]"
								alt=""
								src="/body1.svg"
							/>
							<div className="absolute left-[calc(50%_-_306.55px)] top-[calc(50%_-_200px)] box-border h-[400px] w-[613.1px] rounded-3xs border-[1px] border-solid border-black bg-gray-100 opacity-[0.9] [backdrop-filter:blur(10px)]" />
							<img
								className="absolute bottom-[5px] left-[calc(50%_-_296.64px)] top-[17px] h-[calc(100%_-_22px)] max-h-full w-[593px] rounded-[20px] object-cover"
								alt=""
								loading="lazy"
								src={img}
							/>
						</div>
					</div>
					<div className="absolute left-[66px] top-[calc(50%_-_394px)] flex w-[639px] items-center [text-shadow:0px_3px_4px_rgba(0,_0,_0,_0.5)]">
						Title
					</div>
					<div className="absolute left-[94px] top-[545px] flex h-[calc(100%_-_639px)] w-[calc(100%_-_189px)] items-center text-[16px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						vestibulum, justo ac ultrices commodo, neque ex interdum nulla, sed
						rutrum enim tellus eu ipsum. Phasellus sodales pulvinar odio, in
						suscipit turpis ullamcorper in. Sed sit amet metus faucibus, laoreet
						justo vitae, dictum enim. Integer vel massa a lectus tempor
						fringilla vitae sit amet quam. In hac habitasse platea dictumst.
						Nullam eu sem semper, malesuada elit sed, scelerisque est. Mauris
						pulvinar est in lectus fringilla, sed viverra nisl pulvinar. Nunc in
						massa ac massa pellentesque ultricies. Maecenas a interdum justo, et
						condimentum est. Sed fringilla ipsum et velit ultricies, nec
						placerat mi placerat.
					</div>
					<div className="absolute left-[calc(50%_-_40px)] top-[460px] flex flex-row items-center justify-center">
						<img
							className="relative h-20 w-20 rounded-[50%] object-cover"
							alt=""
							src={gem}
						/>
					</div>
					<div className="absolute right-[15.7px] top-[15.6px] flex h-[185.47px] w-[179.3px] flex-row items-center justify-center [transform-origin:0_0] [transform:_rotate(-4.03deg)]">
						<img
							className="relative h-[218.36px] w-[210.06px] object-cover"
							alt=""
							src={lotus}
						/>
					</div>
					<div className="absolute bottom-[-0.2px] right-[0px] box-border flex w-[235px] flex-row items-center justify-center gap-[25px] py-[15px] pl-5 pr-[50px]">
						{/* <img
								className="relative h-[76.2px] max-w-full flex-1 overflow-hidden"
								alt=""
								src={web}
								height="76"
								width="76"
							/>
							<img
								className="relative h-[74px] max-w-full flex-1 overflow-hidden"
								alt=""
								src={github}
								height="74"
								width="74"
							/> */}
					</div>
				</div>
			</div>
		</div>,
		// </div>,
		document.body
	);
};

export default Modal;

// import React, { useState } from "react";

// // create a model using react and tailwind
// const Modal = () => {
// 	// const [showModal, setShowModal] = useState(false);
// 	return (
// 		<div
// 			className="
//         flex h-screen w-screen
//         items-center justify-center
//         bg-red-500 opacity-25
//         "
// 		>
// 			<button
// 				className="btn w-2/5"
// 				onClick={() => window.my_modal_2.showModal()}
// 			>
// 				open modal
// 			</button>
// 			<dialog
// 				id="my_modal_2"
// 				className="modal bg-red-500"
// 			>
// 				<form
// 					method="dialog"
// 					className="modal-box"
// 				>
// 					<h3 className="text-lg font-bold">Hello!</h3>
// 					<p className="py-4">Press ESC key or click outside to close</p>
// 				</form>
// 				<form
// 					method="dialog"
// 					className="modal-backdrop"
// 				>
// 					<button>close</button>
// 				</form>
// 			</dialog>
// 		</div>
// 	);
// };

// export default Modal;
