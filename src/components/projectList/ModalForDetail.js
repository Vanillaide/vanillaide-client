import { AntDesign } from "@expo/vector-icons";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Modal,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { LIGHT_GREY_50, DARK_GREY_100 } from "../../constants/color";

const { width: screenWidth } = Dimensions.get("window");

export default function ModalForDetail({ isVisible, handlePress }) {
  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.backIcon} onPress={handlePress}>
          <AntDesign name="caretdown" size={24} color={LIGHT_GREY_50} />
        </TouchableOpacity>
        <Text style={styles.text}>Delete</Text>
        <Text style={styles.text}>Deploy or Performance</Text>
      </View>
    </Modal>
  );
}

ModalForDetail.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  handlePress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    justifyContent: "center",
    padding: 20,
    width: screenWidth,
    height: 163,
    backgroundColor: DARK_GREY_100,
  },
  backIcon: {
    alignSelf: "center",
  },
  text: {
    marginBottom: 10,
    fontFamily: "FiraCode",
    fontSize: 20,
    color: LIGHT_GREY_50,
  },
});
