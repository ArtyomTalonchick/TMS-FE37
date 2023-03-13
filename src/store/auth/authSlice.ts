import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { AxiosError } from "axios";
import authApi, { CreateTokensRequestType, CreateTokensResponseType } from "../../api/authApi";

interface AuthStateType {
    isLogged: boolean;
    accessToken: string;
    refreshToken: string;
    loading: boolean;
    error?: string;
}

const initialState: AuthStateType = {
    isLogged: false,
    accessToken: "",
    refreshToken: "",
    loading: false,
    error: undefined,
};

const createTokens = createAsyncThunk<CreateTokensResponseType, CreateTokensRequestType, { rejectValue: string }>(
    "auth/createTokens",
    async (data, thunksApi) => {
        try {
            const response = await authApi.createTokens(data);
            return response.data;
        } catch (error) {
            // if (error instanceof AxiosError) {
            //     return 
            // }
            return thunksApi.rejectWithValue("Login error");
        }
    },
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        lagout: (state) => {
            state.isLogged = false;
            state.accessToken = "";
            state.refreshToken = "";
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
        });
    },
});

export const authActions = {
    ...authSlice.actions,
    createTokens,
};

const authReducer = authSlice.reducer;
export default authReducer;
