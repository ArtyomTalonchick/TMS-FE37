import axios from "axios";

export interface RefreshTokensResponseType {
    access: string;
}

const refreshTokens = () => (
    axios<RefreshTokensResponseType>({
        method: "POST",
        url: "https://studapi.teachmeskills.by/auth/jwt/refresh/",
        data: {
            refresh: localStorage.getItem("refreshToken"),
        },
    })
);

export default refreshTokens;
