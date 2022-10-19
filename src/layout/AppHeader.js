import PropTypes from "prop-types";
import { StyleSheet, View, Dimensions } from "react-native";

import { HEADER } from "../constants/color";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const appHeaderHeight = screenHeight / 12;

export default function AppHeader({ children }) {
  return <View style={styles.container}>{children}</View>;
}

AppHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: screenWidth,
    height: appHeaderHeight,
    backgroundColor: HEADER,
  },
});
