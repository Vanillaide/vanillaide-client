import PropTypes from "prop-types";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import { CONTENT, WHITE, LIGHT_GREY_50 } from "../../constants/color";

export default function LanguageBar({ selectedLanguage, handlePress }) {
  const languagesArray = ["HTML", "CSS", "JS"];

  return (
    <View style={styles().container}>
      {languagesArray.map((language) => {
        return (
          <TouchableOpacity
            key={language}
            style={
              selectedLanguage === language.toLowerCase()
                ? styles(LIGHT_GREY_50).languageWrapper
                : styles(CONTENT).languageWrapper
            }
            onPress={() => handlePress(language.toLowerCase())}
          >
            <Text style={styles().text}>{language}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

LanguageBar.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  handlePress: PropTypes.func.isRequired,
};

const styles = (backgroundColor) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      width: "100%",
      backgroundColor: CONTENT,
    },
    languageWrapper: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      backgroundColor,
    },
    text: {
      fontFamily: "FiraCode",
      fontSize: 20,
      color: WHITE,
    },
  });
