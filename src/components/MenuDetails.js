import { FOOD_IMG } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Modal } from "antd";

const MenuDetails = ({ details }) => {
	const dispatch = useDispatch();
	const cartItem = useSelector((state) => state.cart.items);
	const [tickMark, setTickmark] = useState(false);
	const [isOpenModal, setIsOpenModal] = useState(false);
	const handleCart = () => {
		setTimeout(() => {
			setTickmark(false);
		}, 1000);
		if (!cartItem.includes(details)) {
			dispatch(addItem(details));
		} else {
			setIsOpenModal(true)
		}
	};
	const handleRemove = () => {
		dispatch(removeItem(details));
	};
	const { name, price, defaultPrice, description, imageId } =
		details?.card?.info;
	const location = useLocation();
	const { pathname } = location;

	return (
		<div className="my-2 text-left flex justify-between border shadow-sm">
			<div className="m-2">
				<span className="font-bold text-lg text-gray-500">{name}</span>
				<p>₹ {price / 100 || defaultPrice / 100}</p>
				<p className="font-normal my-1">{description}</p>
			</div>
			<div>
				{pathname !== "/cart" ? (
					!tickMark ? (
						<p
							className="p-2 bg-slate-600 text-white text-center"
							onClick={() => {
								setTickmark(true);
								handleCart();
							}}
						>
							Add +
						</p>
					) : (
						<p className="p-2 bg-slate-100 text-slate-600 text-center">
							Added...
						</p>
					)
				) : (
					<p
						className="p-2 bg-slate-600 text-white text-center"
						onClick={() => {
							handleRemove();
						}}
					>
						Remove -
					</p>
				)}
				<img src={FOOD_IMG + imageId} alt="" className="w-[100%] h-32 block" />
			</div>

			<Modal
				title="Similar Item Found"
				open={isOpenModal}
				onCancel={() => setIsOpenModal(false)}
				footer={null}
			>
				<p>Item has already added...</p>
			</Modal>
		</div>
	);
};

export default MenuDetails;
