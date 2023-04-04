import React, { useEffect, useRef, useState } from "react";
import useTranslation from "../../../hooks/useTranslations";
import C from "../../../styledComponents";
import Loader from "../../ui/loader/Loader";
import TextField from "../../ui/textField/TextField";
import S from "./Login.styled";
import type { CreateTokensRequestType } from "../../../api/auth/createTokens";

export type PropsType = {
    loading: boolean;
    error?: string;
    onSubmit: (data: CreateTokensRequestType) => void;
}

const LoginView: React.FC<PropsType> = ({
    loading,
    error,
    onSubmit,
}) => {
	const { t } = useTranslation();
	const emailRef = useRef<HTMLInputElement>(null);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		if (!loading && emailRef.current) {
			emailRef.current.focus();
		}
	}, [loading]);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		onSubmit({ email, password });
	};

	return (
		<S.container onSubmit={handleSubmit}>
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

export default LoginView;
