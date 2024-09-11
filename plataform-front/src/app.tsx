import React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/not-found";
import LandingPage from "./pages/landing-page";
import About from "./pages/about";
import Header from "./components/header";
import Brand from "./pages/brand";
  
const App = () => {
	return (
		<>
			<Header />
			<Suspense fallback={<div className="container">Loading...</div>}>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/about" element={<About />} />
					<Route path="/brand" element={<Brand />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</>
	);
};

export default App;