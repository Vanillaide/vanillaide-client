import { Alert } from "react-native";

import { FAILED_SIGNUP, INTERNAL_SERVER_ERROR } from "../constants/error";
import axiosInstance from "./axiosInstance";

async function postSignUp(username, email, password, passwordConfirm) {
  try {
    const result = await axiosInstance.post("/api/auth/signup", {
      username,
      email,
      password,
      passwordConfirm,
    });

    return result.status;
  } catch (err) {
    const { status } = err.response;

    if (status === 400) {
      Alert.alert(FAILED_SIGNUP);
    }

    if (status === 500) {
      Alert.alert(INTERNAL_SERVER_ERROR);
    }
  }
}

export default { postSignUp };
