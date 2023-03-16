import axios from "axios";

export interface GetAccountResponseType {
    username: string;
    id: number;
    email: string;
}

const getAccount = () => (
    axios<GetAccountResponseType>({
        method: "GET",
        url: "https://studapi.teachmeskills.by/auth/users/me/",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
    })
);

export default getAccount;
