import { ReactNode } from "react";

import CommonInfoContext from "./context";
import useValue from "./useValue";

export default function CommonInfoProvider({ children }: { children: ReactNode }) {
	const values = useValue();

	return <CommonInfoContext.Provider value={values}>{children}</CommonInfoContext.Provider>;
}
