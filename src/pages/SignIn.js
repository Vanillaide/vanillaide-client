import { Feather } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { View, Text, TextInput, StyleSheet } from "react-native";

import CustomButton from "../components/CustomButton";
import Logo from "../components/Logo";
import AppHeader from "../layout/AppHeader";
import ContentBox from "../layout/ContentBox";
import Layout from "../layout/Layout";

export default function SignIn({ navigation }) {
  const handleSignInPress = () => {
    navigation.navigate("ProjectList");
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <Layout>
      <AppHeader>
        <Feather name="menu" size={30} color="#E0DCDC" />
        <Logo fontSize={30} />
        <View />
      </AppHeader>
      <ContentBox>
        <View style={{ flex: 1 }}>
          <Text>Sign in</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text>이메일</Text>
          <TextInput placeholder="이메일" />
          <Text>패스워드</Text>
          <TextInput placeholder="PW" />
        </View>
        <View style={styles.buttonView}>
          <CustomButton
            text="Sign In"
            fontSize={12}
            handlePress={handleSignInPress}
          />
          <CustomButton
            text="Back"
            fontSize={12}
            handlePress={handleBackPress}
          />
        </View>
      </ContentBox>
    </Layout>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  buttonView: {
    flex: 2,
    flexDirection: "row",
  },
});
