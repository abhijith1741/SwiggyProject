import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuItems from "./MenuItems";
const RestaurantMenu = () => {
	const [showMenu, setShowMenu] = useState(null);
	const { resId } = useParams();
	const restaurantMenu = useRestaurantMenu(resId);
	if (restaurantMenu === null) {
		return <Shimmer />;
	}

	const { costForTwoMessage, name, cuisines, avgRating, areaName } =
		restaurantMenu.cards[2].card.card.info;

	const category =
		restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
			(cat) =>
				cat.card.card["@type"] ==
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);
	return (
		<>
			<div className=" mt-4 text-center">
				<h2 className="font-bold text-lg">{name}</h2>
				<div className="">
					<div className="">
						<p className="font-normal text-sm mt-2">
							{cuisines.join(", ")} - {costForTwoMessage}
						</p>
						<h3>⭐ {avgRating}</h3>
						<h4>{areaName}</h4>
					</div>
				</div>
			</div>

			<div className="text-center mx-auto">
				{category?.map((cate, index) => (
					<MenuItems
						key={cate.card.card.title}
						data={cate}
						showList={index === showMenu}
						setShowMenu={setShowMenu}
						index={index}
					/>
				))}
			</div>
		</>
	);
};

export default RestaurantMenu;
