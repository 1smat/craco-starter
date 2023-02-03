import React, { Suspense } from "react";

export default function SuspensedComponent({
	isLoaded,
	children,
	fallback = <div />
}: {
	isLoaded: boolean;
	children: React.ReactNode;
	fallback?: React.ReactNode;
}) {
	if (!isLoaded) {
		return null;
	}

	return <Suspense fallback={fallback}>{children}</Suspense>;
}
