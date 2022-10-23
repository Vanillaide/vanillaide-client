import PropTypes from "prop-types";
import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Keyboard,
  TextInput,
  KeyboardAvoidingView,
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
      const status = await api.postSignUp(
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
      <AppHeader>
        <Logo fontSize={30} />
      </AppHeader>
      <ContentBox>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={150}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Sign Up</Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>name</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                autoCorrect={false}
                value={userInput.username}
                onChangeText={(text) => {
                  setUserInput((prev) => {
                    return { ...prev, username: text };
                  });
                }}
              />
            </View>
            <Text style={styles.errorMsg}>{errorMsg.name}</Text>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.label}>email</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                autoCorrect={false}
                value={userInput.email}
                onChangeText={(text) => {
                  setUserInput((prev) => {
                    return { ...prev, email: text };
                  });
                }}
              />
            </View>
            <Text style={styles.errorMsg}>{errorMsg.email}</Text>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.label}>password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                secureTextEntry
                autoCorrect={false}
                value={userInput.password}
                onChangeText={(text) => {
                  setUserInput((prev) => {
                    return { ...prev, password: text };
                  });
                }}
              />
            </View>
            <Text style={styles.errorMsg}>{errorMsg.password}</Text>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.label}>password confirm</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                secureTextEntry
                autoCorrect={false}
                value={userInput.passwordConfirm}
                onChangeText={(text) => {
                  setUserInput((prev) => {
                    return { ...prev, passwordConfirm: text };
                  });
                }}
              />
            </View>
            <Text style={styles.errorMsg}>{errorMsg.passwordConfirm}</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <CustomButton
              text="Sign Up"
              fontSize={20}
              handlePress={handlePress}
            />
          </View>
        </KeyboardAvoidingView>
      </ContentBox>
    </Layout>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 20,
    width: 300,
  },
  titleWrapper: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontFamily: "FiraCode",
    color: "lightgrey",
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  label: {
    fontFamily: "FiraCode",
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
    fontFamily: "FiraCode",
    paddingLeft: 12,
    width: "100%",
  },
  errorMsg: {
    fontFamily: "FiraCode",
    fontSize: 10,
    color: "red",
  },
  buttonWrapper: {
    alignItems: "center",
  },
});
