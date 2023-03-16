import createTokens from "./createTokens";
import getAccount from "./getAccount";
import refreshTokens from "./refreshTokens";

export * from "./createTokens";
export * from "./getAccount";
export * from "./refreshTokens";

const authApi = {
    createTokens,
    getAccount,
    refreshTokens,
};

export default authApi;
