import { Feather } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import PropTypes from "prop-types";
import { useState, useCallback, useContext } from "react";
import { StyleSheet, View, Text, ScrollView, StatusBar } from "react-native";

import api from "../api/api";
import Logo from "../components/Logo";
import ModalForCreate from "../components/projectList/ModalForCreate";
import ModalForDetail from "../components/projectList/ModalForDetail";
import ProjectCard from "../components/projectList/ProjectCard";
import ProjectCreateButton from "../components/projectList/ProjectCreateButton";
import { LIGHT_GREY_100, LIGHT_GREY_150, CONTENT } from "../constants/color";
import { NO_PROJECT_NAME, MORE_THAN_MAXLENGTH } from "../constants/error";
import { UserContext } from "../contexts/AuthProvider";
import AppHeader from "../layout/AppHeader";
import ContentBox from "../layout/ContentBox";

const statusBarHeight = StatusBar.currentHeight;

export default function ProjectList({ navigation }) {
  const [projectName, setProjectName] = useState("");
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const {
    loggedInUser: { _id: userId },
  } = useContext(UserContext);

  useFocusEffect(
    useCallback(() => {
      console.log(
        "request get project list to backend, /api/users/:userId/projects",
      );
      return () => {
        console.log("clean up fetch function");
      };
    }, []),
  );

  const handleCardPress = () => {
    console.log(
      "Take a deeper look a project project provider file and write setFocusedProject logics",
    );
    navigation.navigate("Editor");
  };

  const handleCreatePress = async () => {
    if (!projectName) {
      return setErrorMessage(NO_PROJECT_NAME);
    }

    if (projectName.length > 50) {
      return setErrorMessage(MORE_THAN_MAXLENGTH);
    }

    const status = await api.postProject(userId, projectName);

    if (status === 201) {
      setProjectName("");
      setErrorMessage("");
      setIsCreateModalVisible(false);

      navigation.navigate("Editor");
    }
  };

  const handleCancelPress = () => {
    setProjectName("");
    setErrorMessage("");
    setIsCreateModalVisible(false);
  };

  const handleDetailPress = () => {
    setIsDetailModalVisible(true);
  };

  const handleDelete = () => {
    console.log(
      "request to backend to delete project, This function needs _id information from project card, /api/projects/:projectId",
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      stickyHeaderIndices={[1]}
    >
      <View style={styles.statusBar} />
      <AppHeader>
        <Feather name="menu" size={30} color={LIGHT_GREY_100} />
        <Logo fontSize={30} />
        <View />
      </AppHeader>
      <ContentBox>
        <ScrollView
          contentContainerStyle={{ paddingTop: 0, paddingBottom: 10 }}
        >
          <View style={styles.pageNameWrapper}>
            <Text style={styles.pageName}>My Projects</Text>
          </View>
          <View style={styles.container}>
            <ProjectCard
              handleCardPress={handleCardPress}
              handleDetailPress={handleDetailPress}
            />
            <ProjectCreateButton
              handlePress={() => setIsCreateModalVisible(true)}
            />
          </View>
        </ScrollView>
        <ModalForCreate
          isVisible={isCreateModalVisible}
          projectName={projectName}
          handleChange={setProjectName}
          handleCancelPress={handleCancelPress}
          handleCreatePress={handleCreatePress}
          errorMessage={errorMessage}
        />
        <ModalForDetail
          isVisible={isDetailModalVisible}
          handlePress={() => setIsDetailModalVisible(false)}
          handleDelete={() => handleDelete()}
        />
      </ContentBox>
    </ScrollView>
  );
}

ProjectList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  statusBar: {
    height: statusBarHeight,
    backgroundColor: CONTENT,
    zIndex: 1,
  },
  pageNameWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  pageName: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 30,
    fontFamily: "FiraCode",
    color: LIGHT_GREY_150,
  },
  container: {
    flex: 10,
    width: "100%",
    alignItems: "center",
  },
});
