import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		addItem: (state, action) => {
			state.items.push(action.payload);
		},
		removeItem: (state, action) => {
			let newItem = action.payload;
			state.items = state.items.filter((item) => item.card.info.id !== newItem.card.info.id);
		},
	},
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
