import React from "react";

import classes from "./Sidebar.module.scss";

export default function Sidebar() {
	return (
		<div className={classes.sidebar}>
			<div>
				<h4>Менинг аккаунтим</h4>
				<p>
					<span>СТИР 201119113</span>
					<span>Kompyuter Markazi DK Примердлинного наименования организации</span>
				</p>

				<ul>
					<li>Ташкилотлар кесимида</li>
					<li>Йўналишлар кесимида</li>
					<li>Ҳужжатлар</li>
					<li>Мониторинг</li>
				</ul>
			</div>

			<p>Чиқиш</p>
		</div>
	);
}
