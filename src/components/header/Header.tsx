import React from "react";
import S from "./Header.styled";

const Header: React.FC = () => {
	return (
		<S.container>
			<S.linksList>
				<S.link to="/">
					About
				</S.link>
				<S.link to="/account">
					Account
				</S.link>
				<S.link to="/login">
					Login
				</S.link>
			</S.linksList>
		</S.container>
	);
}

export default Header;
