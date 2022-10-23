import PropTypes from "prop-types";
import { useContext, useRef } from "react";
import { StyleSheet, KeyboardAvoidingView, Alert } from "react-native";
import { WebView } from "react-native-webview";

import api from "../api/api";
import { SUCCEEDED_SAVE_PROJECT } from "../constants/ui";
import { ProjectContext } from "../contexts/ProjectProvider";
import Layout from "../layout/Layout";

export default function Editor({ navigation }) {
  const webViewRef = useRef();
  const {
    focusedProject: { projectId, code },
  } = useContext(ProjectContext);

  const handleOnMessage = async (ev) => {
    const data = JSON.parse(ev.nativeEvent.data);

    if (data.method === "save") {
      const status = await api.patchProject(projectId, data.code);

      if (status === 200) {
        Alert.alert(SUCCEEDED_SAVE_PROJECT);
      }
    }
  };

  const handleOnLoad = () => {
    if (webViewRef.current) {
      webViewRef.current.postMessage(JSON.stringify(code));
    }
  };

  return (
    <Layout>
      <KeyboardAvoidingView style={styles.container}>
        <WebView
          ref={webViewRef}
          onMessage={handleOnMessage}
          onLoad={handleOnLoad}
          source={{ uri: process.env.REACT_APP_WEBVIEW_URL }}
        />
      </KeyboardAvoidingView>
    </Layout>
  );
}

Editor.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
