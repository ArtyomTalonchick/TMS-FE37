import React, { useState } from "react";
import { authActions } from "../../../store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import C from "../../../styledComponents";
import Loader from "../../ui/loader/Loader";
import TextField from "../../ui/textField/TextField";
import S from "./Login.styled";

const Login: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useAppDispatch();
	const loading = useAppSelector((state) => state.auth.loading);
	const error = useAppSelector((state) => state.auth.error);

	const onSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		dispatch(authActions.createTokens({ email, password }));
	};

	return (
		<S.container onSubmit={onSubmit}>
			<S.header>
				Login
			</S.header>
			<TextField
				name="email"
				label="Email"
				value={email}
				setValue={setEmail}
			/>
			<TextField
				type="password"
				label="Password"
				value={password}
				setValue={setPassword}
			/>
			<C.button type="submit">
				Submit
			</C.button>
			{loading && (
				<Loader />
			)}
			{error && (
				<S.error>
					{error}
				</S.error>
			)}
        </S.container>
	);
};

export default Login;
