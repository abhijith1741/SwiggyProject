import {useState, useEffect} from "react"
import { RESTAURANT_MENU } from "./constants";
const useRestaurantMenu = (resId) => {
    const [restaurantMenu, setRestaurantMenu] = useState(null);
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(RESTAURANT_MENU + resId);
		const json = await data.json();
		setRestaurantMenu(json?.data);
	};
    return restaurantMenu
}

export default useRestaurantMenu