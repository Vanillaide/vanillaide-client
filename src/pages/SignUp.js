import { Feather } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Keyboard,
  TextInput,
} from "react-native";

import api from "../api/api";
import CustomButton from "../components/CustomButton";
import Logo from "../components/Logo";
import AppHeader from "../layout/AppHeader";
import ContentBox from "../layout/ContentBox";
import Layout from "../layout/Layout";
import signupValidation from "./signupValidation";

export default function SignUp({ navigation }) {
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [errorMsg, setErrorMsg] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handlePress = async () => {
    Keyboard.dismiss();
    const { username, email, password, passwordConfirm } = userInput;

    const validations = [
      signupValidation.isValidName(username, setErrorMsg),
      signupValidation.isValidEmail(email, setErrorMsg),
      signupValidation.isValidPassword(password, setErrorMsg),
      signupValidation.isValidPasswordConfirm(
        passwordConfirm,
        password,
        setErrorMsg,
      ),
    ];

    const isAllValid = validations.every((result) => {
      if (result) return true;

      return false;
    });

    if (isAllValid) {
      const status = await api.postSignup(
        username,
        email,
        password,
        passwordConfirm,
      );

      if (status === 200) {
        navigation.navigate("SignIn");
      }
    }
  };

  return (
    <Layout>
      <ScrollView contentContainerStyle={{ paddingTop: 0, paddingBottom: 0 }}>
        <AppHeader>
          <Feather name="menu" size={30} color="#E0DCDC" />
          <Logo fontSize={30} />
          <View />
        </AppHeader>
      </ScrollView>
      <ContentBox>
        <ScrollView contentContainerStyle={{ paddingTop: 0, paddingBottom: 0 }}>
          <View style={style.titleWrapper}>
            <Text style={style.title}>Sign Up</Text>
          </View>
          <View style={style.formContainer}>
            <Text style={style.label}>name</Text>
            <View style={style.inputContainer}>
              <TextInput
                style={style.input}
                autoCorrect={false}
                placeholder="Enter your name"
                value={userInput.username}
                onChangeText={(text) => {
                  setUserInput((prev) => {
                    return { ...prev, username: text };
                  });
                }}
              />
            </View>
            {errorMsg && <Text style={style.errorMsg}>{errorMsg.name}</Text>}
          </View>
          <View style={style.formContainer}>
            <Text style={style.label}>email</Text>
            <View style={style.inputContainer}>
              <TextInput
                style={style.input}
                autoCorrect={false}
                placeholder="Enter your email"
                value={userInput.email}
                onChangeText={(text) => {
                  setUserInput((prev) => {
                    return { ...prev, email: text };
                  });
                }}
              />
            </View>
            {errorMsg.email && (
              <Text style={style.errorMsg}>{errorMsg.email}</Text>
            )}
          </View>
          <View style={style.formContainer}>
            <Text style={style.label}>password</Text>
            <View style={style.inputContainer}>
              <TextInput
                style={style.input}
                secureTextEntry
                autoCorrect={false}
                placeholder="Enter your password"
                value={userInput.password}
                onChangeText={(text) => {
                  setUserInput((prev) => {
                    return { ...prev, password: text };
                  });
                }}
              />
            </View>
            {errorMsg.password && (
              <Text style={style.errorMsg}>{errorMsg.password}</Text>
            )}
          </View>
          <View style={style.formContainer}>
            <Text style={style.label}>password confirm</Text>
            <View style={style.inputContainer}>
              <TextInput
                style={style.input}
                secureTextEntry
                autoCorrect={false}
                placeholder="Enter your password confirm"
                value={userInput.passwordConfirm}
                onChangeText={(text) => {
                  setUserInput((prev) => {
                    return { ...prev, passwordConfirm: text };
                  });
                }}
              />
            </View>
            {errorMsg.passwordConfirm && (
              <Text style={style.errorMsg}>{errorMsg.passwordConfirm}</Text>
            )}
          </View>
          <CustomButton
            text="Sign Up"
            fontSize={20}
            handlePress={handlePress}
          />
        </ScrollView>
      </ContentBox>
    </Layout>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const style = StyleSheet.create({
  formContainer: {
    marginBottom: 20,
  },
  titleWrapper: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "lightgrey",
  },
  label: {
    marginVertical: 5,
    color: "lightgrey",
  },
  inputContainer: {
    height: 50,
    backgroundColor: "lightgrey",
    flexDirection: "row",
    borderWidth: 0.5,
    borderRadius: 5,
  },
  input: {
    paddingRight: 100,
    paddingLeft: 20,
  },
  errorMsg: {
    fontSize: 10,
    color: "red",
  },
});
