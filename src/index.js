import ReactDOM from "react-dom/client";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";

const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const AppLayout = () => {
	return (
		<div className="app">
			<Header />
			<Outlet />
		</div>
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
				path: "/about",
				element: <About name="abhi" />,
			},
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
