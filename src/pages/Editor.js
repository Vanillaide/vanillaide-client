import { Text } from "react-native";

import AppHeader from "../layout/AppHeader";
import ContentBox from "../layout/ContentBox";
import Layout from "../layout/Layout";

function Editor() {
  return (
    <Layout>
      <AppHeader>
        <Text>FunctionHeader</Text>
      </AppHeader>
      <ContentBox>
        <Text>LanguageBar</Text>
        <Text>CodeArea</Text>
      </ContentBox>
    </Layout>
  );
}

export default Editor;
