import { FontAwesome } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity } from "react-native";

import { LIGHT_GREY_50 } from "../../../constants/color";

export default function RunButton({ code }) {
  return (
    <TouchableOpacity style={styles.iconWrapper}>
      <FontAwesome name="play" size={24} color={LIGHT_GREY_50} />
    </TouchableOpacity>
  );
}

RunButton.propTypes = {
  code: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  iconWrapper: {
    marginHorizontal: 14,
  },
});
