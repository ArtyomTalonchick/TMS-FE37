import createTokens from "./createTokens";
import getAccount from "./getAccount";
import refreshTokens from "./refreshTokens";
import verifyToken from "./verifyToken";

export * from "./createTokens";
export * from "./getAccount";
export * from "./refreshTokens";

const authApi = {
    createTokens,
    getAccount,
    refreshTokens,
    verifyToken,
};

export default authApi;
