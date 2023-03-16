import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {  useAppSelector } from "../store/store";
import { defaultTheme } from "../theme/theme";
import { GlobalStyle } from "./globalStyle";
import Header from "./header/Header";
import About from "./pages/about/About";
import Account from "./pages/account/Account";
import Login from "./pages/login/Login";

const App: React.FC = () => {
	const isLogged = useAppSelector((state) => state.auth.isLogged);

	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<BrowserRouter>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<About />} />
						{!isLogged ? (
							<Route path="/login" element={<Login />} />
						) : (
							<Route path="/account" element={<Account />} />
						)}
						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>
				</main>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
