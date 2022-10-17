import { Feather } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { View } from "react-native";

import CustomButton from "../components/CustomButton";
import Logo from "../components/Logo";
import AppHeader from "../layout/AppHeader";
import ContentBox from "../layout/ContentBox";
import Layout from "../layout/Layout";

export default function SignUp({ navigation }) {
  const handlePress = () => {
    navigation.navigate("SignIn");
  };

  return (
    <Layout>
      <AppHeader>
        <Feather name="menu" size={30} color="#E0DCDC" />
        <Logo fontSize={30} />
        <View />
      </AppHeader>
      <ContentBox>
        <CustomButton text="Sign Up" fontSize={12} handlePress={handlePress} />
      </ContentBox>
    </Layout>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
