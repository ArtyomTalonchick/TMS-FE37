import React from "react";
import { authActions } from "../../store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import C from "../../styledComponents";
import S from "./Header.styled";

const Header: React.FC = () => {
	const dispatch = useAppDispatch();
	const isLogged = useAppSelector((state) => state.auth.isLogged);

	const handleLogout = () => {
		dispatch(authActions.logout());
	};

	return (
		<S.container>
			<S.linksList>
				<S.link to="/">
					About
				</S.link>
				{!isLogged ? (
					<S.link to="/login">
						Login
					</S.link>
				) : (
					<S.link to="/account">
						Account
					</S.link>
				)}
			</S.linksList>
			{isLogged && (
				<C.button onClick={handleLogout}>
					Logout
				</C.button>
			)}
		</S.container>
	);
}

export default Header;
