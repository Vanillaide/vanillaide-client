import PropTypes from "prop-types";
import { StyleSheet, Text } from "react-native";

export default function Logo({ fontSize }) {
  return <Text style={styles(fontSize).logo}>Vanillaide</Text>;
}

Logo.propTypes = {
  fontSize: PropTypes.number.isRequired,
};

const styles = (fontSize) =>
  StyleSheet.create({
    logo: {
      fontSize,
    },
  });
