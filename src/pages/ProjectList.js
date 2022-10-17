import { Feather } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

import CustomButton from "../components/CustomButton";
import Logo from "../components/Logo";
import AppHeader from "../layout/AppHeader";
import ContentBox from "../layout/ContentBox";
import Layout from "../layout/Layout";

export default function ProjectList({ navigation }) {
  const handlePress = () => {
    navigation.navigate("Editor");
  };

  return (
    <Layout>
      <AppHeader>
        <Feather name="menu" size={30} color="#E0DCDC" />
        <Logo fontSize={30} />
        <View />
      </AppHeader>
      <ContentBox>
        <Text>My Projects</Text>
        <CustomButton
          text="Move to editor"
          fontSize={12}
          handlePress={handlePress}
        />
      </ContentBox>
    </Layout>
  );
}

ProjectList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
