import { AxiosError, AxiosResponse } from "axios";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { authActions } from "../store/auth/authSlice";
import authApi from "./auth/authApi";

const executeAuthRequest = async <R>(
    requestFunction: () => Promise<AxiosResponse<R, any>>,
    dispatch: ThunkDispatch<unknown, unknown, AnyAction>,
) => {
    try {
        return await requestFunction();
    } catch (error) {
        if (error instanceof AxiosError && error.response?.status === 401) {

            try {
                const refreshResponse = await authApi.refreshTokens();
                dispatch(authActions.setAccessToken(refreshResponse.data));
            } catch {
                dispatch(authActions.logout());
                throw error;
            }

            return await requestFunction();
        } else {
            throw error;
        }
    }
};

export default executeAuthRequest;
