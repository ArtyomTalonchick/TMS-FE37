import React from "react";
import useTranslation from "../../hooks/useTranslations";
import { authActions } from "../../store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import C from "../../styledComponents";
import S from "./Header.styled";

const Header: React.FC = () => {
	const { t, toggleLanguage } = useTranslation();
	const dispatch = useAppDispatch();
	const isLogged = useAppSelector((state) => state.auth.isLogged);

	const handleLogout = () => {
		dispatch(authActions.logout());
	};

	return (
		<S.container>
			<S.linksList>
				<S.link to="/">
					{t.header.links.about}
				</S.link>
				<S.link to="/posts">
					{t.header.links.posts}
				</S.link>
				<S.link to="/posts/create">
					{t.header.links.createPost}
				</S.link>

				{!isLogged ? (
					<S.link to="/login">
						{t.header.links.login}
					</S.link>
				) : (
					<S.link to="/account">
						{t.header.links.account}
					</S.link>
				)}
			</S.linksList>
			{isLogged && (
				<C.button onClick={handleLogout}>
					{t.header.logout}
				</C.button>
			)}			
			<C.button onClick={toggleLanguage} type="button">
				Toggle language
			</C.button>
		</S.container>
	);
}

export default Header;
