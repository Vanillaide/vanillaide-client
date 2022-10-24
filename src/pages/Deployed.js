import PropTypes from "prop-types";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import WebView from "react-native-webview";

import Layout from "../layout/Layout";

export default function Deployed({ route }) {
  const { projectId } = route.params;

  return (
    <Layout>
      <KeyboardAvoidingView style={styles.container}>
        <WebView
          source={{
            uri: `http://192.168.0.17:8000/api/projects/${projectId}/deployment`,
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

Deployed.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      projectId: PropTypes.string.isRequired,
    }),
  }),
};
