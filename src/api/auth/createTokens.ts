import axios from "axios";

export interface CreateTokensRequestType {
    email: string;
    password: string;
}

export interface CreateTokensResponseType {
    access: string;
    refresh: string;
}

const createTokens = (data: CreateTokensRequestType) => (
    axios<CreateTokensResponseType>({
        method: "POST",
        url: "https://studapi.teachmeskills.by/auth/jwt/create/",
        data,
    })
);

export default createTokens;
