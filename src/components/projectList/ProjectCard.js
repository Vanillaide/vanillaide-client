import { Entypo, FontAwesome } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import {
  BLACK,
  DARK_GREY_50,
  LIGHT_GREY_150,
  WHITE,
} from "../../constants/color";

export default function ProjectCard({
  projectId,
  projectName,
  code,
  deployState,
  handleCardPress,
  handleDetailPress,
}) {
  return (
    <TouchableOpacity
      style={styles.projectCardContainer}
      onPress={() =>
        handleCardPress({ projectId, projectName, code, deployState })
      }
    >
      <View style={styles.projectNameWrapper}>
        <FontAwesome name="folder" size={22} color={BLACK} />
        <Text style={styles.projectName}>{projectName}</Text>
      </View>
      <View style={styles.projectDetailsWrapper}>
        {deployState && (
          <View style={styles.deployStateWrapper}>
            <Text style={styles.deployState} numberOfLines={1}>
              deployed
            </Text>
          </View>
        )}
        <TouchableOpacity
          onPress={() => handleDetailPress(projectId, deployState)}
        >
          <Entypo name="dots-three-vertical" size={22} color={BLACK} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

ProjectCard.propTypes = {
  projectId: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  code: PropTypes.object.isRequired,
  deployState: PropTypes.bool.isRequired,
  handleCardPress: PropTypes.func.isRequired,
  handleDetailPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  projectCardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 15,
    width: 300,
    height: 50,
    padding: 10,
    borderRadius: 10,
    backgroundColor: WHITE,
  },
  projectNameWrapper: {
    flexDirection: "row",
  },
  projectName: {
    marginLeft: 15,
    fontSize: 13,
    fontFamily: "FiraCode",
  },
  projectDetailsWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  deployStateWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    width: 61,
    height: 16,
    borderRadius: 20,
    backgroundColor: DARK_GREY_50,
  },
  deployState: {
    fontFamily: "FiraCode",
    fontSize: 8,
    color: LIGHT_GREY_150,
  },
});
