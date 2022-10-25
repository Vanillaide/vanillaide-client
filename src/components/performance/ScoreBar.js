import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

import {
  CONTENT,
  LIGHT_GREY_150,
  GREEN_100,
  RED_100,
  YELLOW_50,
} from "../../constants/color";

export default function ScoreBar({ category, score, barWidth }) {
  const [barColor, setBarColor] = useState(CONTENT);
  const scoreBarWidth = (barWidth * score) / 100;

  useEffect(() => {
    if (score < 40) {
      setBarColor(RED_100);
    } else if (score < 70) {
      setBarColor(YELLOW_50);
    } else {
      setBarColor(GREEN_100);
    }
  }, []);

  return (
    <View style={styles().categoryContainer}>
      <Text style={styles().category}>{category}</Text>
      <Text style={styles().score}>{score}</Text>
      <View style={styles(scoreBarWidth, barColor).bar} />
    </View>
  );
}

ScoreBar.propTypes = {
  category: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  barWidth: PropTypes.number.isRequired,
};

const styles = (scoreBarWidth, barColor) =>
  StyleSheet.create({
    categoryContainer: {
      marginBottom: 10,
      marginLeft: 17,
    },
    category: {
      fontSize: 15,
      fontFamily: "FiraCode",
      color: LIGHT_GREY_150,
    },
    score: {
      fontSize: 15,
      fontFamily: "FiraCode",
      color: LIGHT_GREY_150,
    },
    bar: {
      width: scoreBarWidth,
      height: 30,
      backgroundColor: barColor,
    },
  });
