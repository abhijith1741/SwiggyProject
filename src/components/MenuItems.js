import { useState } from "react";
import MenuDetails from "./MenuDetails";

const MenuItems = ({ data, showList, setShowMenu, index }) => {
	const { itemCards } = data.card.card;
	const handleClick = () => {
		if (showList) {
			return setShowMenu(null);
		}
		setShowMenu(index);
	};
	return (
		<div
			className="my-6 w-9/12 mx-auto  shadow-xl cursor-pointer"
		>
			<div className="flex justify-between" onClick={handleClick}>
				<h2 className="font-bold text-lg">{data.card.card.title}</h2>
				<span>⬇️</span>
			</div>
			{showList &&
				itemCards.map((item) => (
					<MenuDetails key={item.card.info.id} details={item} />
				))}
		</div>
	);
};

export default MenuItems;
