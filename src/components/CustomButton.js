import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import { BUTTON_COLOR } from "../constants/color";

export default function CustomButton({ text, fontSize, handlePress }) {
  return (
    <TouchableOpacity style={styles().button} onPress={handlePress}>
      <Text style={styles(fontSize).text}>{text}</Text>
    </TouchableOpacity>
  );
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  handlePress: PropTypes.func.isRequired,
};

const styles = (fontSize) =>
  StyleSheet.create({
    button: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: BUTTON_COLOR,
    },
    text: {
      fontSize,
      fontFamily: "FiraCode",
    },
  });
