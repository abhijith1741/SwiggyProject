import ReactDOM from "react-dom/client";
import { lazy, Suspense, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store/store";

const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const AppLayout = () => {
	return (
		<Provider store={store}>
			<div className="app">
				<Header />
				<Outlet />
			</div>
		</Provider>
	);
};

const appRoute = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/resTaurants/:resId",
				element: (
					<Suspense fallback={<h1>Loading.....</h1>}>
						<RestaurantMenu />
					</Suspense>
				),
			},
			{
				path: "/cart",
				element: <Cart />,
			},
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
