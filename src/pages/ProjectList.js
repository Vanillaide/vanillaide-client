import { Feather } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import PropTypes from "prop-types";
import { useState, useCallback, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StatusBar,
} from "react-native";

import api from "../api/api";
import Logo from "../components/Logo";
import ModalForCreate from "../components/projectList/ModalForCreate";
import ModalForDetail from "../components/projectList/ModalForDetail";
import ProjectCard from "../components/projectList/ProjectCard";
import ProjectCreateButton from "../components/projectList/ProjectCreateButton";
import { LIGHT_GREY_100, LIGHT_GREY_150, CONTENT } from "../constants/color";
import { NO_PROJECT_NAME, MORE_THAN_MAXLENGTH } from "../constants/error";
import { UserContext } from "../contexts/AuthProvider";
import { ProjectContext } from "../contexts/ProjectProvider";
import AppHeader from "../layout/AppHeader";
import ContentBox from "../layout/ContentBox";

const statusBarHeight = StatusBar.currentHeight;

export default function ProjectList({ navigation }) {
  const [projectList, setProjectList] = useState([]);
  const [projectNameInput, setProjectNameInput] = useState("");
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [isDetailModalVisible, setIsDetailModalVisible] = useState(false);
  const [detailsClickedProject, setDetailsClickedProject] = useState({
    projectId: "",
    deployState: null,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    loggedInUser: { _id: userId },
  } = useContext(UserContext);
  const { setFocusedProject } = useContext(ProjectContext);

  useFocusEffect(
    useCallback(() => {
      async function fetchProjects() {
        const { status, projects } = await api.getProjects(userId);

        if (status === 200) {
          setIsLoading(false);
          setProjectList(projects);
        }
      }

      fetchProjects();
    }, []),
  );

  const handleCardPress = ({ projectId, projectName, code, deployState }) => {
    setFocusedProject({ projectId, projectName, code, deployState });

    navigation.navigate("Editor");
  };

  const handleCreatePress = async () => {
    if (!projectNameInput) {
      return setErrorMessage(NO_PROJECT_NAME);
    }

    if (projectNameInput.length > 50) {
      return setErrorMessage(MORE_THAN_MAXLENGTH);
    }

    const status = await api.postProject(userId, projectNameInput);

    if (status === 201) {
      setProjectNameInput("");
      setErrorMessage("");
      setIsCreateModalVisible(false);

      navigation.navigate("Editor");
    }
  };

  const handleCancelPress = () => {
    setProjectNameInput("");
    setErrorMessage("");
    setIsCreateModalVisible(false);
  };

  const handleDetailPress = (projectId, deployState) => {
    setDetailsClickedProject({ projectId, deployState });
    setIsDetailModalVisible(true);
  };

  const handleDelete = async () => {
    const status = await api.deleteProject(detailsClickedProject.projectId);

    if (status === 200) {
      setIsDetailModalVisible(false);

      navigation.push("ProjectList");
    }
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
        {isLoading ? (
          <ActivityIndicator
            animating={isLoading}
            size="large"
            color={LIGHT_GREY_100}
          />
        ) : (
          <ScrollView
            contentContainerStyle={{ paddingTop: 0, paddingBottom: 10 }}
          >
            <View style={styles.pageNameWrapper}>
              <Text style={styles.pageName}>My Projects</Text>
            </View>
            <View style={styles.projectListWrapper}>
              {projectList.map((project) => {
                const {
                  _id: projectId,
                  name,
                  htmlFile,
                  cssFile,
                  jsFile,
                  deployLink,
                } = project;
                const code = {
                  html: htmlFile,
                  css: cssFile,
                  js: jsFile,
                };

                return (
                  <ProjectCard
                    key={projectId}
                    projectId={projectId}
                    projectName={name}
                    code={code}
                    deployState={!!deployLink}
                    handleCardPress={handleCardPress}
                    handleDetailPress={handleDetailPress}
                  />
                );
              })}
              <ProjectCreateButton
                handlePress={() => setIsCreateModalVisible(true)}
              />
            </View>
          </ScrollView>
        )}
        <ModalForCreate
          isVisible={isCreateModalVisible}
          projectName={projectNameInput}
          handleChange={setProjectNameInput}
          handleCancelPress={handleCancelPress}
          handleCreatePress={handleCreatePress}
          errorMessage={errorMessage}
        />
        <ModalForDetail
          isVisible={isDetailModalVisible}
          projectInfo={detailsClickedProject}
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
    push: PropTypes.func.isRequired,
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
  projectListWrapper: {
    flex: 10,
    width: "100%",
    alignItems: "center",
  },
});
