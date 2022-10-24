import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

import { LIGHT_GREY_150 } from "../../constants/color";

export default function ScoreBar({ category, score, barWidth }) {
  const [barColor, setBarColor] = useState("black");

  // const { width: screenWidth } = Dimensions.get("window");
  // console.log(screenWidth);
  // const barWidth = (((screenWidth * 9) / 10) * score) / 100;
  const scoreBarWidth = (barWidth * score) / 100;
  console.log(scoreBarWidth);

  useEffect(() => {
    if (score < 40) {
      setBarColor("red");
    } else if (score < 70) {
      setBarColor("yellow");
    } else {
      setBarColor("white");
    }
  }, []);

  return (
    <View style={styles().categoryWrapper}>
      <Text>{category}</Text>
      <Text>{score}</Text>
      <View style={styles(scoreBarWidth, barColor).bar} />
    </View>
  );
}

ScoreBar.propTypes = {
  category: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  barWidth: PropTypes.number.isRequired,
};

const styles = (barWidth, barColor) =>
  StyleSheet.create({
    categoryWrapper: {
      margin: 20,
    },
    category: {
      fontSize: 30,
      fontFamily: "FiraCode",
      color: LIGHT_GREY_150,
    },
    score: {
      fontSize: 30,
      fontFamily: "FiraCode",
      color: LIGHT_GREY_150,
    },
    bar: {
      width: barWidth,
      height: 30,
      backgroundColor: barColor,
    },
  });
