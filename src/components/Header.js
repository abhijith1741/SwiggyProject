import { FOOD_LOGO } from "../utils/constants";

const Header = () => {
	return (
		<div className="header">
			<div className="logo-container">
				<img
					className="logo"
					src={FOOD_LOGO}
					alt="logo"
				/>
			</div>
			<div className="nav-item">
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact Us</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
};

export default Header