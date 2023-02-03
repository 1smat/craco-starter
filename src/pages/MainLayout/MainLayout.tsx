import { Outlet } from "react-router-dom";

import MainLayoutHeader from "./_components/MainLayoutHeader";
import Container from "components/shared/Container";

export default function MainLayout() {
	return (
		<div>
			<Container>
				<MainLayoutHeader />
			</Container>
			<section className="pt-50">
				<Outlet />
			</section>
		</div>
	);
}
