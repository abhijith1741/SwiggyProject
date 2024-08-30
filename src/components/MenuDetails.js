import { FOOD_IMG } from "../utils/constants";
const MenuDetails = ({ details }) => {
	const { name, price, defaultPrice, description, imageId } = details.card.info;
	return (
		<div className="my-2 text-left flex justify-between border shadow-sm">
			<div className="m-2">
				<span className="font-bold text-lg text-gray-500">{name}</span>
				<p>₹ {price / 100 || defaultPrice / 100}</p>
				<p>⭐</p>
				<p className="font-normal my-1">{description}</p>   
			</div>
			<div>
				<img src={FOOD_IMG + imageId} alt="" className="w-24" />
			</div>
		</div>
	);
};

export default MenuDetails;
