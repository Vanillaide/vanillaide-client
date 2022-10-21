// import { Feather } from "@expo/vector-icons";
// import { useState } from "react";
import { WebView } from "react-native-webview";

// import CodeArea from "../components/editor/CodeArea";
// import FunctionHeader from "../components/editor/FunctionHeader/FunctionHeader";
// import LanguageBar from "../components/editor/LanguageBar";
// import ToolBar from "../components/editor/ToolBar";
// import { LIGHT_GREY_100 } from "../constants/color";
// import AppHeader from "../layout/AppHeader";
// import ContentBox from "../layout/ContentBox";
// import Layout from "../layout/Layout";

export default function Editor() {
  // const [selectedLanguage, setSelectedLanguage] = useState("html");
  // const [code, setCode] = useState({
  //   html: "",
  //   css: "",
  //   js: "",
  // });

  // const selectedLanguageCode = code[selectedLanguage];

  return (
    <WebView source={{ uri: "http://192.168.0.17:3000" }} />
    // <Layout>
    //   <AppHeader>
    //     <Feather name="menu" size={30} color={LIGHT_GREY_100} />
    //     <FunctionHeader code={code} />
    //   </AppHeader>
    //   <ContentBox>
    //     <LanguageBar
    //       selectedLanguage={selectedLanguage}
    //       handlePress={(language) => setSelectedLanguage(language)}
    //     />
    //     <CodeArea code={selectedLanguageCode} />
    //     <ToolBar
    //       handleChange={(str) =>
    //         setCode((prev) => ({
    //           ...prev,
    //           [selectedLanguage]: prev[selectedLanguage] + str,
    //         }))
    //       }
    //     />
    //   </ContentBox>
    // </Layout>
  );
}
