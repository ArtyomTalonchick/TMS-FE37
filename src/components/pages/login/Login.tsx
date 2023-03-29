import React from "react";
import { CreateTokensRequestType } from "../../../api/auth/createTokens";
import { authActions } from "../../../store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import LoginView from "./LoginView";

const Login: React.FC = () => {
	const dispatch = useAppDispatch();
	const loading = useAppSelector((state) => state.auth.loading);
	const error = useAppSelector((state) => state.auth.error);

	const createTokens = (data: CreateTokensRequestType) => dispatch(authActions.createTokens(data));

	return (
		<LoginView
			createTokens={createTokens}
			loading={loading}
			error={error}
		/>
	);
};

export default Login;
