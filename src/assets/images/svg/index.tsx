// ============ COMMON_ICONS ============
import Approve from "./common/Approve";
import ArrowDown2 from "./common/ArrowDown2";
import AttachInterface from "./common/AttachInterface";
import CirclePlus from "./common/CirclePlus";
import Close from "./common/Close";
import DownloadSvg from "./common/DownloadSvg";
import Error from "./common/Error";
import FilterSettingsSvg from "./common/FilterSettingsSvg";
import MenuArrowRight from "./common/MenuArrowRight";
import RefreshCcv from "./common/RefreshCcv";

// ============ OTHER_ICONS ============
// ....

export type SvgTypes =
	| "filterSettings"
	| "download"
	| "menu-arrow-right"
	| "arrow-down2"
	| "refresh-ccv"
	| "circle-plus"
	| "attach-interface"
	| "close"
	| "approve"
	| "error";

interface ISvgProps {
	name: SvgTypes;
	[key: string]: any;
}

export default function Svg(props: ISvgProps) {
	switch (props.name) {
		case "filterSettings":
			return <FilterSettingsSvg {...props} />;
		case "download":
			return <DownloadSvg {...props} />;
		case "menu-arrow-right":
			return <MenuArrowRight {...props} />;
		case "arrow-down2":
			return <ArrowDown2 {...props} />;
		case "refresh-ccv":
			return <RefreshCcv {...props} />;
		case "circle-plus":
			return <CirclePlus {...props} />;
		case "attach-interface":
			return <AttachInterface {...props} />;
		case "close":
			return <Close {...props} />;
		case "approve":
			return <Approve {...props} />;
		case "error":
			return <Error {...props} />;
		default:
			return null;
	}
}
