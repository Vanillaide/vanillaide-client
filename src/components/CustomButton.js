import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

import { BUTTON_COLOR } from "../constants/color";

export default function CustomButton({
  text,
  fontSize,
  handlePress,
  buttonWidth,
  buttonHeight,
  buttonMargin,
}) {
  const styleValue = { fontSize, buttonWidth, buttonHeight, buttonMargin };

  return (
    <TouchableOpacity style={styles(styleValue).button} onPress={handlePress}>
      <Text style={styles(styleValue).text}>{text}</Text>
    </TouchableOpacity>
  );
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  handlePress: PropTypes.func.isRequired,
  buttonWidth: PropTypes.number,
  buttonHeight: PropTypes.number,
  buttonMargin: PropTypes.number,
};

CustomButton.defaultProps = {
  buttonWidth: 150,
  buttonHeight: 45,
  buttonMargin: 10,
};

const styles = ({ fontSize, buttonWidth, buttonHeight, buttonMargin }) =>
  StyleSheet.create({
    button: {
      backgroundColor: BUTTON_COLOR,
      width: buttonWidth,
      height: buttonHeight,
      background: "D9D9D9",
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
      margin: buttonMargin,
    },
    text: {
      fontSize,
      fontFamily: "FiraCode",
    },
  });
