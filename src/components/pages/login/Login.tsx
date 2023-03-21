import React, { useEffect, useRef, useState } from "react";
import useTranslation from "../../../hooks/useTranslations";
import { authActions } from "../../../store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import C from "../../../styledComponents";
import Loader from "../../ui/loader/Loader";
import TextField from "../../ui/textField/TextField";
import S from "./Login.styled";

const Login: React.FC = () => {
	const { t } = useTranslation();
	const emailRef = useRef<HTMLInputElement>(null);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useAppDispatch();
	const loading = useAppSelector((state) => state.auth.loading);
	const error = useAppSelector((state) => state.auth.error);

	useEffect(() => {
		if (!loading && emailRef.current) {
			emailRef.current.focus();
		}
	}, [loading]);

	const onSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		dispatch(authActions.createTokens({ email, password }));
	};

	return (
		<S.container onSubmit={onSubmit}>
			<S.header>
				{t.loginPage.header}
			</S.header>
			<TextField
				inputRef={emailRef}
				name="email"
				label={t.loginPage.email}
				value={email}
				setValue={setEmail}
			/>
			<TextField
				type="password"
				label={t.loginPage.password}
				value={password}
				setValue={setPassword}
			/>
			<C.button type="submit">
				{t.loginPage.submit}
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
