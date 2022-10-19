import PropTypes from "prop-types";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { LIGHT_GREY_50, DARK_BLUE_50 } from "../../constants/color";

const signsArray = [
  "<",
  ">",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  "`",
  JSON.stringify(""),
];

export default function ToolBar({ handleChange }) {
  return (
    <View style={styles.container}>
      {signsArray.map((sign) => {
        return (
          <TouchableOpacity onPress={() => handleChange(sign)} key={sign}>
            <Text style={styles.text}>{sign}</Text>
          </TouchableOpacity>
        );
      })}
      <TouchableOpacity onPress={() => handleChange("  ")}>
        <Text style={styles.text}>TAB</Text>
      </TouchableOpacity>
    </View>
  );
}

ToolBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    backgroundColor: DARK_BLUE_50,
  },
  text: {
    fontSize: 15,
    fontFamily: "FiraCode",
    color: LIGHT_GREY_50,
  },
});
