import { createSlice } from "@reduxjs/toolkit";
import userData from "../../utils/profile.json";

const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem("userState");
    if (serializedState === null) {
      return {
        profile: null,
        isAuthenticated: false,
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {
      profile: null,
      isAuthenticated: false,
    };
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({
      profile: state.profile,
      isAuthenticated: state.isAuthenticated,
    });
    sessionStorage.setItem("userState", serializedState);
  } catch {
    console.error("Error al guardar el usuario")
  }
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    ...loadState(),
    loading: false,
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginComplete: (state, action) => {
      state.loading = false;
      if (action.payload.success) {
        state.profile = action.payload.profile;
        state.isAuthenticated = true;
        state.error = null;
        saveState(state);
      } else {
        state.error = action.payload.error;
      }
    },
    logout: (state) => {
      state.profile = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      sessionStorage.removeItem("userState");
    },
    updateUserCredits: (state, action) => {
      state.profile.credit = action.payload;
      saveState(state);
    },
  },
});

export const { loginStart, loginComplete, logout, updateUserCredits } =
  userSlice.actions;

export const login = (username, password) => (dispatch) => {
  dispatch(loginStart());

  setTimeout(() => {
    if (
      username === userData.profile.username &&
      password === userData.profile.password
    ) {
      dispatch(loginComplete({ success: true, profile: userData.profile }));
    } else {
      dispatch(
        loginComplete({ success: false, error: "Invalid username or password" })
      );
    }
  }, 1000);
};

export default userSlice.reducer;
