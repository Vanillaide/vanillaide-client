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

Deployed.propTypes = {
  route: PropTypes.object,
};
