import RestoCard from "./RestoCard";
import restoList from "../utils/junkData";
const Body = () => {
	return (
		<div className="body">
			<div className="search">Search</div>
			<div className="restaurant-container">
				{restoList?.map((restaurant) => (
					<RestoCard key={restaurant?.info?.id} resObj={restaurant} />
				))}
			</div>
		</div>
	);
};

export default Body