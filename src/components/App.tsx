import React from "react";
import { Provider } from "react-redux/es/exports";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { store } from "../store/store";
import { defaultTheme } from "../theme/theme";
import Header from "./header/Header";
import About from "./pages/about/About";
import Account from "./pages/account/Account";
import Login from "./pages/login/Login";

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={defaultTheme}>
				<BrowserRouter>
					<Header />
					<main>
						<Routes>
							<Route path="/" element={<About />} />
							<Route path="/login" element={<Login />} />
							<Route path="/account" element={<Account />} />
						</Routes>
					</main>
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
