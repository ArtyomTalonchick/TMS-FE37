import axios from "axios";

const verifyToken = () => (
    axios({
        method: "POST",
        url: "https://studapi.teachmeskills.by/auth/jwt/verify/",
        data: {
            token: localStorage.getItem("accessToken"),
        },
    })
);

export default verifyToken;
