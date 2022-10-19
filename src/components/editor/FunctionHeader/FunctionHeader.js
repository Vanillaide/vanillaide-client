import PropTypes from "prop-types";
import { StyleSheet, View } from "react-native";

import RedoButton from "./RedoButton";
import RunButton from "./RunButton";
import SaveButton from "./SaveButton";
import UndoButton from "./UndoButton";

export default function FunctionHeader({ code }) {
  return (
    <View style={styles.container}>
      <RunButton code={code} />
      <UndoButton code={code} />
      <RedoButton code={code} />
      <SaveButton code={code} />
    </View>
  );
}

FunctionHeader.propTypes = {
  code: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  iconWrapper: {
    marginHorizontal: 14,
  },
});
