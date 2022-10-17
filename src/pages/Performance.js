import { Text, Button } from "react-native";

import Logo from "../components/Logo";
import AppHeader from "../layout/AppHeader";
import ContentBox from "../layout/ContentBox";
import Layout from "../layout/Layout";

export default function Performance() {
  return (
    <Layout>
      <AppHeader>
        <Text>NavBarIcon</Text>
        <Logo fontSize={30} />
      </AppHeader>
      <ContentBox>
        <Logo fontSize={70} />
        <Button title="measure performance" />
      </ContentBox>
    </Layout>
  );
}
