import { Entypo, FontAwesome } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import {
  BLACK,
  DARK_GREY_50,
  LIGHT_GREY_150,
  WHITE,
} from "../../constants/color";

export default function ProjectCard({ handleCardPress, handleDetailPress }) {
  return (
    <TouchableOpacity style={styles.projectCard} onPress={handleCardPress}>
      <View style={styles.projectNameWrapper}>
        <FontAwesome name="folder" size={22} color={BLACK} />
        <Text style={styles.projectName}>My calculator</Text>
      </View>
      <View style={styles.projectDetailsWrapper}>
        <View style={styles.deploymentStateWrapper}>
          <Text style={styles.deployState} numberOfLines={1}>
            deployed
          </Text>
        </View>
        <TouchableOpacity onPress={() => handleDetailPress()}>
          <Entypo name="dots-three-vertical" size={22} color={BLACK} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

ProjectCard.propTypes = {
  handleCardPress: PropTypes.func.isRequired,
  handleDetailPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  projectCard: {
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
  deploymentStateWrapper: {
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
