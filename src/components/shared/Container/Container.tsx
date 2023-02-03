import { FC } from "react";

import classes from "./Container.module.scss";

type ContainerProps = {
	children: any;
	extraClass?: any;
};
const Container: FC<ContainerProps> = ({ children, extraClass }) => {
	return <div className={`${classes.container} ${extraClass}`}>{children}</div>;
};

export default Container;
