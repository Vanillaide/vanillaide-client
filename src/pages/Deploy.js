import { Feather } from "@expo/vector-icons";
import { useState, useContext } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";

import CustomButton from "../components/CustomButton";
import Logo from "../components/Logo";
import { LIGHT_GREY_100 } from "../constants/color";
import { ProjectContext } from "../contexts/ProjectProvider";
import AppHeader from "../layout/AppHeader";
import ContentBox from "../layout/ContentBox";
import Layout from "../layout/Layout";

export default function Deploy() {
  const [isLoading, setIsLoading] = useState(false);
  const { focusedProject } = useContext(ProjectContext);

  const handlePress = () => {
    setIsLoading(true);
  };

  return (
    <Layout>
      <AppHeader>
        <Feather name="menu" size={30} color={LIGHT_GREY_100} />
        <Logo fontSize={30} />
        <View />
      </AppHeader>
      <ContentBox>
        {!isLoading ? (
          <>
            <Text style={styles.projectName}>{focusedProject.projectName}</Text>
            <CustomButton
              text="deploy"
              fontSize={20}
              handlePress={handlePress}
              buttonWidth={180}
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

const styles = StyleSheet.create({
  projectName: {
    marginBottom: 10,
    fontSize: 70,
    fontFamily: "FiraCode",
    color: LIGHT_GREY_100,
  },
});
