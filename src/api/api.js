import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";

import { LOGIN_FAILED, INTERNAL_SERVER_ERROR } from "../constants/error";
import axiosInstance from "./axiosInstance";

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
    if (err.response.status === 400) {
      Alert.alert(LOGIN_FAILED);
    }
    if (err.response.status === 500) {
      Alert.alert(INTERNAL_SERVER_ERROR);
    }
  }
}

async function postAuthCheck(token) {
  try {
    const config = {
      headers: {
        token,
      },
    };
    const { data } = await axiosInstance.post("/api/auth", {}, config);

    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export default { postLogIn, postAuthCheck };
