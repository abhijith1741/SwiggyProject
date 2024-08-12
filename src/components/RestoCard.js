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
		<div className="card">
			<img className="food-logo" src={FOOD_IMG + cloudinaryImageId} alt="" />
			<h4>{name}</h4>
			<h5>{cuisines.join(", ")}</h5>
			<h5>{avgRating} Stars</h5>
			<h5>{deliveryTime} Minutes</h5>
		</div>
	);
};

export default RestoCard;
