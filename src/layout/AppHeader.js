import PropTypes from "prop-types";
import { StyleSheet, View, Dimensions, StatusBar } from "react-native";

import { HEADER } from "../constants/color";

const { width: screenWidth } = Dimensions.get("window");
const statusBarHeight = StatusBar.currentHeight;

export default function AppHeader({ children }) {
  return <View style={styles.container}>{children}</View>;
}

AppHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 66,
    marginTop: statusBarHeight,
    alignItems: "center",
    justifyContent: "space-around",
    width: screenWidth,
    backgroundColor: HEADER,
  },
});
