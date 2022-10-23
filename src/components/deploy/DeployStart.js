import PropTypes from "prop-types";
import { StyleSheet, Text } from "react-native";

import { LIGHT_GREY_100 } from "../../constants/color";
import CustomButton from "../CustomButton";

export default function DeployStart({ projectName, handlePress }) {
  return (
    <>
      <Text style={styles.projectName}>{projectName}</Text>
      <CustomButton
        text="deploy"
        fontSize={20}
        handlePress={handlePress}
        buttonWidth={180}
        buttonHeight={50}
        borderRadius={30}
      />
    </>
  );
}

DeployStart.propTypes = {
  projectName: PropTypes.string.isRequired,
  handlePress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  projectName: {
    marginBottom: 10,
    fontSize: 70,
    fontFamily: "FiraCode",
    color: LIGHT_GREY_100,
  },
});
