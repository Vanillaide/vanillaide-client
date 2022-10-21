import { Feather } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";

import CustomButton from "../components/CustomButton";
import Logo from "../components/Logo";
import NavBar from "../components/navBar/NavBar";
import { LIGHT_GREY_100 } from "../constants/color";
import { ProjectContext } from "../contexts/ProjectProvider";
import AppHeader from "../layout/AppHeader";
import ContentBox from "../layout/ContentBox";
import Layout from "../layout/Layout";

export default function Performance({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);
  const { focusedProject } = useContext(ProjectContext);

  const handlePress = () => {
    setIsLoading(true);
  };

  const handleClosePress = () => {
    setIsNavBarVisible(false);
  };

  return (
    <Layout>
      {isNavBarVisible && (
        <NavBar
          isVisible={isNavBarVisible}
          handlePress={handleClosePress}
          navigation={navigation}
        />
      )}
      <AppHeader>
        <Feather
          name="menu"
          size={30}
          color={LIGHT_GREY_100}
          onPress={() => setIsNavBarVisible(true)}
        />
        <Logo fontSize={30} />
        <View />
      </AppHeader>
      <ContentBox>
        {!isLoading ? (
          <>
            <Text style={styles.projectName}>{focusedProject.projectName}</Text>
            <CustomButton
              text="start measuring"
              fontSize={20}
              handlePress={handlePress}
              buttonWidth={250}
              buttonHeight={50}
              borderRadius={30}
            />
          </>
        ) : (
          <ActivityIndicator
            animating={isLoading}
            size="large"
            color={LIGHT_GREY_100}
          />
        )}
      </ContentBox>
    </Layout>
  );
}

Performance.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  projectName: {
    marginBottom: 10,
    fontSize: 70,
    fontFamily: "FiraCode",
    color: LIGHT_GREY_100,
  },
});
