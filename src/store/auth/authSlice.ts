import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import authApi, { CreateTokenResponseType, CreateTokenResultType } from "../../api/authApi";

export interface AuthStateType {
    login: boolean;
    access: string;
    refresh: string;
    loading: boolean;
    error?: string;
}

const initialState: AuthStateType = {
    login: false,
    access: "",
    refresh: "",
    loading: false,
}

export const createToken = createAsyncThunk<CreateTokenResultType, CreateTokenResponseType, { rejectValue: string }>(
    "auth/createToken",
    async (data, thunkApi) => {
        try {
            const response = await authApi.createToken(data);
            return response.data;
        } catch (error) {
            if (error instanceof AxiosError && error.response?.data.detail) {
                return thunkApi.rejectWithValue(error.response?.data.detail);
            }
            return thunkApi.rejectWithValue("Login error");
        }
    }
)

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logaut: (state) => {
            state.access = "";
            state.refresh = "";
            state.login = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createToken.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(createToken.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });
        builder.addCase(createToken.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.access = payload.access;
            state.refresh = payload.refresh;
            state.login = true;
        });
    },
});

export const authActions = {
    ...authSlice.actions,
    createToken,
};

const authReducer = authSlice.reducer;
export default authReducer;