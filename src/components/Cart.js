import { useLocation } from "react-router-dom";
import MenuDetails from "./MenuDetails";
import { useSelector } from "react-redux";
const Cart = () => {
	const cartItem = useSelector((state) => state.cart.items);
	const location = useLocation();
	const { pathname } = location;
	if (pathname == "/cart" && cartItem.length === 0) {
		return (
			<>
				<div className="flex justify-center items-center h-[80vh]">
					<h1 className="no-item">
						No Items Found in the Cart
					</h1>
				</div>
			</>
		);
	}
	return (
		<>
			<div className="w-[80%] mx-auto my-4">
				{cartItem.map((item) => (
					<MenuDetails key={item.card.info.id} details={item} />
				))}
			</div>
		</>
	);
};

export default Cart;
