import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";

import {
  FAILED_SIGNUP,
  FAILED_LOGIN,
  INTERNAL_SERVER_ERROR,
} from "../constants/error";
import axiosInstance from "./axiosInstance";

async function postSignUp(username, email, password, passwordConfirm) {
  try {
    const res = await axiosInstance.post("/api/auth/signup", {
      username,
      email,
      password,
      passwordConfirm,
    });

    return res.status;
  } catch (err) {
    const errorStatus = err.response.status;

    if (errorStatus === 400) {
      Alert.alert(FAILED_SIGNUP);
    }

    if (errorStatus === 500) {
      Alert.alert(INTERNAL_SERVER_ERROR);
    }
  }
}

async function postLogIn(email, password) {
  try {
    const config = {
      headers: {
        email,
        password,
      },
    };
    const res = await axiosInstance.post("/api/auth/login", {}, config);
    const token = res.headers.token;

    await SecureStore.setItemAsync("token", token);

    return res.data;
  } catch (err) {
    const errorStatus = err.response.status;

    if (errorStatus === 400) {
      Alert.alert(FAILED_LOGIN);
    }

    if (errorStatus === 500) {
      Alert.alert(INTERNAL_SERVER_ERROR);
    }
  }
}

async function postAuthCheck() {
  try {
    const { data } = await axiosInstance.post("/api/auth");

    return data;
  } catch (err) {
    return { err };
  }
}

export default { postSignUp, postLogIn, postAuthCheck };
