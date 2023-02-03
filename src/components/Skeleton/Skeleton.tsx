import Skeleton, { SkeletonProps } from "react-loading-skeleton";

interface IMySkeleton extends SkeletonProps {
	width: number | string;
	height?: number | string;
}

export default function MySkeleton({ width, height = 30, ...props }: IMySkeleton) {
	const finalWidth = typeof width === "number" ? `${width}px` : width;
	const finalHeight = typeof height === "number" ? `${height}px` : height;

	return <Skeleton style={{ width: finalWidth, height: finalHeight }} {...props} />;
}
