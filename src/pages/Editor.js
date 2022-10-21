import { Feather } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { useState } from "react";

import CodeArea from "../components/editor/CodeArea";
import FunctionHeader from "../components/editor/FunctionHeader/FunctionHeader";
import LanguageBar from "../components/editor/LanguageBar";
import ToolBar from "../components/editor/ToolBar";
import NavBar from "../components/navBar/NavBar";
import { LIGHT_GREY_100 } from "../constants/color";
import AppHeader from "../layout/AppHeader";
import ContentBox from "../layout/ContentBox";
import Layout from "../layout/Layout";

export default function Editor({ navigation }) {
  const [selectedLanguage, setSelectedLanguage] = useState("html");
  const [isVisible, setIsVisible] = useState(false);
  const [code, setCode] = useState({
    html: "",
    css: "",
    js: "",
  });
  const selectedLanguageCode = code[selectedLanguage];
  const handleClosePress = () => {
    setIsVisible(false);
  };

  return (
    <Layout>
      {isVisible && (
        <NavBar
          isVisible={isVisible}
          handlePress={handleClosePress}
          navigation={navigation}
        />
      )}
      <AppHeader>
        <Feather
          name="menu"
          size={30}
          color={LIGHT_GREY_100}
          onPress={() => setIsVisible(true)}
        />
        <FunctionHeader code={code} />
      </AppHeader>
      <ContentBox>
        <LanguageBar
          selectedLanguage={selectedLanguage}
          handlePress={(language) => setSelectedLanguage(language)}
        />
        <CodeArea code={selectedLanguageCode} />
        <ToolBar
          handleChange={(str) =>
            setCode((prev) => ({
              ...prev,
              [selectedLanguage]: prev[selectedLanguage] + str,
            }))
          }
        />
      </ContentBox>
    </Layout>
  );
}

Editor.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
