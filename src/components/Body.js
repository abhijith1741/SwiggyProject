import RestoCard from "./RestoCard";
import restoList from "../utils/junkData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
	const [restaurantData, setRestaurantData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [retaurantName, setRestaurantName] = useState("");

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9185&lng=76.2558&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);

		const json = await data.json();
		debugger
		setRestaurantData(
			json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
		setFilteredData(
			json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};

	return restaurantData?.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter-section">
				<div className="search">
					<input
						type="text"
						placeholder="Enter Restaurant Name"
						value={retaurantName}
						onChange={(e)=>setRestaurantName(e.target.value)}
					/>
					<button onClick={()=>{
						const restaurantByName = restaurantData?.filter((item) => (
							item.info.name.toLowerCase().includes(retaurantName.toLowerCase())
						))
						setFilteredData(restaurantByName)
					}}>Search</button>
				</div>
				<button
					className="filter"
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
			<div className="restaurant-container">
				{filteredData?.map((restaurant) => (
					<RestoCard key={restaurant?.info?.id} resObj={restaurant} />
				))}
			</div>
		</div>
	);
};

export default Body;
