import PropTypes from "prop-types";
import { StyleSheet, View, Dimensions } from "react-native";

import { CONTENT } from "../constants/color";

const { width: screenWidth } = Dimensions.get("window");

export default function ContentBox({ children }) {
  return <View style={styles.container}>{children}</View>;
}

ContentBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

const styles = StyleSheet.create({
  container: {
    flex: 11,
    alignItems: "center",
    justifyContent: "center",
    width: screenWidth,
    backgroundColor: CONTENT,
  },
});
