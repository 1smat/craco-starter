import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import "./App.less";
import AllRoutes from "./Routes";
import store, { persistor } from "./store";

import CommonInfoProvider from "context/commonInfo";

import { queryClient } from "./services/api";
import "services/i18n";

import ErrorBoundary from "components/shared/ErrorBoundary";
import Layout from "components/shared/Layout";
import PageLoader from "components/shared/PageLoader";

import "assets/styles/index.scss";

const App = () => {
	return (
		<ErrorBoundary>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<Provider store={store}>
						<PersistGate persistor={persistor} loading={<PageLoader />}>
							<CommonInfoProvider>
								<Layout>
									<Suspense fallback={<PageLoader />}>
										<AllRoutes />
										<ReactQueryDevtools initialIsOpen={false} />
									</Suspense>
								</Layout>
							</CommonInfoProvider>
						</PersistGate>
					</Provider>
				</QueryClientProvider>
			</BrowserRouter>
		</ErrorBoundary>
	);
};

export default App;
