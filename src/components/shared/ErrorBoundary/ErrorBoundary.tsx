import React, { Component, ErrorInfo, ReactNode } from "react";

import classes from "./ErrorBoundary.module.scss";

import Svg from "assets/images/svg";

interface Props {
	children?: ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false
	};

	public static getDerivedStateFromError(_: Error): State {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		this.setState({ hasError: true });
		console.log("Uncaught error:", error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return (
				<div className={classes.container}>
					<h1>Хатолик юз берди</h1>
					<Svg name="error" style={{ width: "650px" }} />
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
