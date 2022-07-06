import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Environment } from "../environment/environment";

export const signupAction = createAsyncThunk(
  "signup",
  async (signupObj, thunkAPI) => {
    try {
      const res = await axios.post(
        Environment.BASE_API_URL + "/signup",
        signupObj
      );
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const loginAction = createAsyncThunk(
  "login",
  async (loginObj, thunkAPI) => {
    try {
      const res = await axios.post(
        Environment.BASE_API_URL + "/login",
        loginObj
      );
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    error: null,
    pending: false,
  },
  reducers: {
    setSuccessLogin(state, action) {
      state = {
        user: action.payload.data,
        isAuthenticated: true,
        error: null,
        pending: false,
      };
    },
    setFailureLogin(state, action) {
      state = {
        user: action.payload,
        isAuthenticated: true,
        error: null,
        pending: false,
      };
    },
    setSuccessSignup(state, action) {
      state = {
        user: action.payload.data,
        isAuthenticated: true,
        error: null,
        pending: false,
      };
    },
    setFailureLogin(state, action) {
      state = {
        user: action.payload,
        isAuthenticated: true,
        error: null,
        pending: false,
      };
    },
  },
  extraReducers: {
    [loginAction.rejected]: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = action.payload;
      state.pending = false;
    },
    [loginAction.fulfilled]: (state, action) => {
      state.user = action.payload?.data;
      state.isAuthenticated = action.payload?.success;
      state.error = null;
      state.pending = false;
    },

    [loginAction.pending]: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = false;
      state.error = null;
      state.pending = true;
    },
    [signupAction.rejected]: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = action.payload;
      state.pending = false;
    },

    [signupAction.fulfilled]: (state, action) => {
      state.user = action.payload?.data;
      state.isAuthenticated = action.payload?.success;
      state.error = null;
      state.pending = false;
    },

    [signupAction.pending]: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = false;
      state.error = null;
      state.pending = true;
    },
  },
});

export default authSlice.reducer;
