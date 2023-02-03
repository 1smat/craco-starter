import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Test from "pages/MainLayout/_pages/Test";


import TokenPage from "pages/TokenPage";
// use lazy
const MainLayout = lazy(() => import("pages/MainLayout"));
const HomePage = lazy(() => import("pages/MainLayout/_pages/Test"));

export default function AllRoutes() {
	const routes = useRoutes([
		{
			path: "/",
			element: <MainLayout />,
			index: false,
			children: [
				{
					path: "/",
					element: <Test />,
					index: true
				},
				{
					path: "/home",
					element: <HomePage />,
					index: true
				},
				{
					path: "/token",
					element: <TokenPage />,
					index: true
				}
			]
		}
	]);

	return routes;
}
