import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { authActions } from "../store/auth/authSlice";
import {  useAppDispatch, useAppSelector } from "../store/store";
import { GlobalStyle } from "./globalStyle";
import Header from "./header/Header";
import About from "./pages/about/About";
import Account from "./pages/account/Account";
import CreatePost from "./pages/createPost/CreatePost";
import Login from "./pages/login/Login";
import PostItem from "./pages/postItem/PostItem";
import Posts from "./pages/posts/Posts";

const App: React.FC = () => {
	const dispatch = useAppDispatch();
	const isLogged = useAppSelector((state) => state.auth.isLogged);
	const theme = useAppSelector((state) => state.settings.theme);

	useEffect(() => {
		if (isLogged) {
			dispatch(authActions.verifyToken());
		}
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<BrowserRouter>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<About />} />
						<Route path="/posts" element={<Posts />} />
						<Route path="/posts/:id" element={<PostItem />} />
						<Route path="/posts/create" element={<CreatePost />} />
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
