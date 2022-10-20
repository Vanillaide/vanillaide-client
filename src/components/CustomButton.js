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
  buttonBackgroundColor,
  buttonBorderRadius,
}) {
  const styleValue = {
    fontSize,
    buttonWidth,
    buttonHeight,
    buttonMargin,
    buttonBackgroundColor,
    buttonBorderRadius,
  };

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
  buttonBackgroundColor: PropTypes.string,
  buttonBorderRadius: PropTypes.number,
};

CustomButton.defaultProps = {
  buttonWidth: 150,
  buttonHeight: 45,
  buttonMargin: 0,
  buttonBackgroundColor: BUTTON_COLOR,
  buttonBorderRadius: 30,
};

const styles = ({
  fontSize,
  buttonWidth,
  buttonHeight,
  buttonMargin,
  buttonBackgroundColor,
  buttonBorderRadius,
}) =>
  StyleSheet.create({
    button: {
      backgroundColor: buttonBackgroundColor,
      width: buttonWidth,
      height: buttonHeight,
      background: "D9D9D9",
      borderRadius: buttonBorderRadius,
      justifyContent: "center",
      alignItems: "center",
      margin: buttonMargin,
    },
    text: {
      fontSize,
      fontFamily: "FiraCode",
    },
  });
