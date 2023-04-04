import React from "react";
import { authActions } from "../../../store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import LoginView from "./LoginView";
import { CreateTokensRequestType } from "../../../api/auth/createTokens";

const Login: React.FC = () => {
	const dispatch = useAppDispatch();
	const loading = useAppSelector((state) => state.auth.loading);
	const error = useAppSelector((state) => state.auth.error);

	const onSubmit = (data: CreateTokensRequestType) => dispatch(authActions.createTokens(data));

	return (
		<LoginView
			loading={loading}
			error={error}
			onSubmit={onSubmit}
		/>
	);
};

export default Login;
