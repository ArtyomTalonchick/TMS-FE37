import React, { useEffect } from "react";
import { authActions } from "../../../store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import Loader from "../../ui/loader/Loader";
import S from "./Account.styled";

const Account: React.FC = () => {
	const dispatch = useAppDispatch();
	const loading = useAppSelector((state) => state.auth.loading);
	const id = useAppSelector((state) => state.auth.id);
	const email = useAppSelector((state) => state.auth.email);
	const username = useAppSelector((state) => state.auth.username);

	useEffect(() => {
		dispatch(authActions.getAccount());
	}, []);

	return (
		<S.container>
			<S.line>
				<S.label>
					id
				</S.label>
				<S.value>
					{id}
				</S.value>
			</S.line>
			<S.line>
				<S.label>
					email
				</S.label>
				<S.value>
					{email}
				</S.value>
			</S.line>
			<S.line>
				<S.label>
					username
				</S.label>
				<S.value>
					{username}
				</S.value>
			</S.line>
			{loading && (
				<Loader />
			)}
		</S.container>
	);
}

export default Account;
