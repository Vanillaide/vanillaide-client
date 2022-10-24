import { useContext } from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import WebView from "react-native-webview";

import { ProjectContext } from "../contexts/ProjectProvider";
import Layout from "../layout/Layout";

export default function Deployed() {
  const {
    focusedProject: { projectId },
  } = useContext(ProjectContext);

  return (
    <Layout>
      <KeyboardAvoidingView style={styles.container}>
        <WebView
          source={{
            uri: `${process.env.REACT_APP_BACK_URL}/api/projects/${projectId}/deployment`,
          }}
        />
      </KeyboardAvoidingView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
