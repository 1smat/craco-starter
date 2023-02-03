import { createContext } from "react";

import useValue from "./useValue";

export type CommonInfoContextType = ReturnType<typeof useValue>;

const CommonInfoContext = createContext<CommonInfoContextType>({} as CommonInfoContextType);

export default CommonInfoContext;
