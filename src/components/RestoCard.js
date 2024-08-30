import { FOOD_IMG } from "../utils/constants";

const RestoCard = (props) => {
	const {
		name,
		cuisines,
		avgRating,
		sla: { deliveryTime },
		cloudinaryImageId,
	} = props.resObj.info;

	return (
		<div className="card m-4">
			<img
				className="food-logo w-56 shadow-lg h-34 hover:p-2 hover:bg-gray-400"
				src={FOOD_IMG + cloudinaryImageId}
				alt=""
			/>
			<h4 className="font-bold mt-2">{name}</h4>
			<h5 className="text-sm">{cuisines.join(", ")}</h5>
			<h5 className="text-sm">{avgRating} Stars</h5>
			<h5 className="text-sm">{deliveryTime} Minutes</h5>
		</div>
	);
};

export const RatedRestaurantCard = (RestaurantCard) => {
	return (props) => {
		return (
			<>
				<span className="p-2 m-2 absolute text-blue-50 bg-slate-600">Promoted</span>
				<RestaurantCard {...props} />
			</>
		);
	};
};

export default RestoCard;
