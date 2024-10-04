import { useSelector } from "react-redux";
import { FOOD_LOGO } from "../utils/constants";
import {Link} from "react-router-dom"
const Header = () => {
	const cartItem = useSelector(state => state.cart.items)
	return (
		<div className="header flex justify-between items-center px-2 border-b-2 border-gray-300 shadow-sm">
			<div className="w-40">
				<img
					className="logo"
					src={FOOD_LOGO}
					alt="logo"
				/>
			</div>
			<div className="nav-item p-2">
				<ul className="flex items-center">
					<Link to="/" className="mr-2 text-gray-400 hover:text-gray-700"><li>Home</li></Link>
					<Link to="/about" className="mr-2 text-gray-400 hover:text-gray-700"><li>About</li></Link>
					<Link to="/contact" className="mr-2 text-gray-400 hover:text-gray-700"><li>Contact Us</li></Link>
					<Link to="/cart" className="mr-2 text-gray-400 hover:text-gray-700"><li>Cart [{cartItem.length} Items]</li></Link>

				</ul>
			</div>
		</div>
	);
};

export default Header