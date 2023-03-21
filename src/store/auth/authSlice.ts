import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import authApi, {
    CreateTokensRequestType, CreateTokensResponseType, GetAccountResponseType, RefreshTokensResponseType,
} from "../../api/auth/authApi";
import executeAuthRequest from "../../api/executeAuthRequest";

interface AuthStateType {
    isLogged: boolean;
    accessToken: string;
    refreshToken: string;
    loading: boolean;
    error?: string;
    id?: number;
    username?: string;
    email?: string;
}

const getInitialState = (): AuthStateType => {
    const accessToken = localStorage.getItem("accessToken") ?? "";
    const refreshToken = localStorage.getItem("refreshToken") ?? "";
    const isLogged = !!(accessToken && refreshToken);

    return {
        isLogged,
        accessToken: isLogged ? accessToken : "",
        refreshToken: isLogged ? refreshToken : "",
        loading: false,
        error: undefined,
    };
}

const getAccount = createAsyncThunk<GetAccountResponseType, void, { rejectValue: string }>(
    "auth/getAccount",
    async (data, thunksApi) => {
        try {
            const response = await executeAuthRequest(
                () => authApi.getAccount(),
                thunksApi.dispatch,
            );
            return response.data;
        } catch {
            return thunksApi.rejectWithValue("Error");
        }
    },
);

const createTokens = createAsyncThunk<CreateTokensResponseType, CreateTokensRequestType, { rejectValue: string }>(
    "auth/createTokens",
    async (data, thunksApi) => {
        try {
            const response = await authApi.createTokens(data);
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError && error.response?.data?.detail) {
                return thunksApi.rejectWithValue(error.response.data.detail);
            }
            return thunksApi.rejectWithValue("Login error");
        }
    },
);

const verifyToken = createAsyncThunk(
    "auth/verifyToken",
    async (data, thunksApi) => {
        await executeAuthRequest(
            () => authApi.verifyToken(),
            thunksApi.dispatch,
        )
    },
);

const authSlice = createSlice({
    name: "auth",
    initialState: getInitialState(),
    reducers: {
        logout: (state) => {
            state.error = undefined;
            state.isLogged = false;
            state.accessToken = "";
            state.refreshToken = "";
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
        },
        setAccessToken: (state, { payload }: PayloadAction<RefreshTokensResponseType>) => {
            state.isLogged = true;
            state.accessToken = payload.access;
            localStorage.setItem("accessToken", state.accessToken);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createTokens.pending, (state) => {
            state.loading = true;
            state.error = undefined;
            state.isLogged = false;
            state.accessToken = "";
            state.refreshToken = "";
        });
        builder.addCase(createTokens.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });
        builder.addCase(createTokens.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.isLogged = true;
            state.accessToken = payload.access;
            state.refreshToken = payload.refresh;
            localStorage.setItem("accessToken", state.accessToken);
            localStorage.setItem("refreshToken", state.refreshToken);
        });

        builder.addCase(getAccount.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(getAccount.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });
        builder.addCase(getAccount.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.id = payload.id;
            state.email = payload.email;
            state.username = payload.username;
        });
    },
});

export const authActions = {
    ...authSlice.actions,
    createTokens,
    getAccount,
    verifyToken,
};

const authReducer = authSlice.reducer;
export default authReducer;
