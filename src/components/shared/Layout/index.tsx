import { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />
			<main
				style={{
					backgroundColor: "white",
					paddingBottom: "30px",
					flex: "1 1 auto"
				}}
				className="main"
			>
				{children}
			</main>
			<Footer />
		</>
	);
};

export default Layout;
