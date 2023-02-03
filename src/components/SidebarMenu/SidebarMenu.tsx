import { FC } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Sidebar.module.scss";

type Menu = {
	id: number;
	title: string;
	path: string;
};

type Props = {
	menuItems: Array<Menu>;

	initialPath?: string;
};

const SidebarMenu: FC<Props> = ({ menuItems }) => {
	return (
		<div className={classes["sidebar-menu"]}>
			{menuItems &&
				menuItems.map(({ title, path }, i) => (
					<NavLink key={i} className={(newData: any) => `${classes["sidebar-menu__item"]} ${newData.isActive && classes.active}`} to={path}>
						{title}
					</NavLink>
				))}
		</div>
	);
};

export default SidebarMenu;
