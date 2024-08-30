import { RESTAURANT_LIST } from "../utils/constants";
import { lazy, useEffect, useState, Suspense } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RatedRestaurantCard } from "./RestoCard";
const RestoCard = lazy(() => import("./RestoCard"));
const Body = () => {
	const [restaurantData, setRestaurantData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [retaurantName, setRestaurantName] = useState("");

	const PromotedRestauarnt = RatedRestaurantCard(RestoCard);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(RESTAURANT_LIST);
		const json = await data.json();
		setRestaurantData(
			json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
		setFilteredData(
			json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};
	const online = useOnlineStatus();
	if (online === false) return <h1>You're offline</h1>;
	console.log("called");
	return restaurantData?.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body my-2">
			<div className="filter-section">
				<div className="search m-2 p-2">
					<input
						type="text"
						placeholder="Enter Restaurant Name"
						value={retaurantName}
						onChange={(e) => setRestaurantName(e.target.value)}
						className="shadow-md m-2 p-2"
					/>
					<button
						onClick={() => {
							const restaurantByName = restaurantData?.filter((item) =>
								item.info.name
									.toLowerCase()
									.includes(retaurantName.toLowerCase())
							);
							setFilteredData(restaurantByName);
						}}
						className="px-5 py-2 mx-2 bg-green-200"
					>
						Search
					</button>
				</div>
				<button
					className="filter m-4 px-5 py-2 bg-green-200"
					onClick={() => {
						const filterItem = restaurantData.filter(
							(item) => item.info.avgRating > 4
						);
						setFilteredData(filterItem);
					}}
				>
					Filter with Rating
				</button>
			</div>
			<div className="flex flex-wrap p-2 justify-between ">
				{filteredData?.map((restaurant) => (
					<Link
						to={"/resTaurants/" + restaurant?.info?.id}
						key={restaurant?.info?.id}
						className="w-3/12"
					>
						{restaurant?.info?.avgRating > 4.2 ? (
							<PromotedRestauarnt resObj={restaurant} />
						) : (
							<Suspense><RestoCard resObj={restaurant} /></Suspense>
						)}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
