import axios from "axios";

export type CreateTokenResponseType = {
    email: string;
    password: string;
}

export type CreateTokenResultType = {
    access: string;
    refresh: string;
}

const createToken = (data: CreateTokenResponseType) => (
    axios<CreateTokenResultType>({
        method: "POST",
        url: "https://studapi.teachmeskills.by/auth/jwt/create/",
        data,
    })
);

const authApi = {
    createToken,
};

export default authApi;
