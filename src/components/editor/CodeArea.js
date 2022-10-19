import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "react-native";

import { DARK_BLUE_100, WHITE } from "../../constants/color";

export default function CodeArea({ code }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{code}</Text>
    </View>
  );
}

CodeArea.propTypes = {
  code: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 14,
    width: "100%",
    backgroundColor: DARK_BLUE_100,
  },
  text: {
    fontFamily: "FiraCode",
    color: WHITE,
  },
});
