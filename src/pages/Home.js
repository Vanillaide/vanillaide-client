import PropTypes from "prop-types";

import CustomButton from "../components/CustomButton";
import Logo from "../components/Logo";
import Layout from "../layout/Layout";

export default function Home({ navigation }) {
  const handleSignInPress = () => {
    navigation.navigate("SignIn");
  };
  const handleSignOutPress = () => {
    navigation.navigate("SignUp");
  };

  return (
    <Layout>
      <Logo fontSize={70} />
      <CustomButton
        text="Sign In"
        fontSize={20}
        handlePress={handleSignInPress}
      />
      <CustomButton
        text="Sign Up"
        fontSize={20}
        handlePress={handleSignOutPress}
      />
    </Layout>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
