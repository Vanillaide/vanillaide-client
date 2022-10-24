import PropTypes from "prop-types";
import { StyleSheet, View, Text, Dimensions } from "react-native";

import { LIGHT_GREY_150 } from "../../constants/color";
import ScoreBar from "./ScoreBar";

export default function PerformanceResult({ performanceScore }) {
  const { performance, accessibility, bestPractices, seo, pwa } =
    performanceScore;

  const { width: screenWidth } = Dimensions.get("window");
  const barWidth = (screenWidth * 9) / 10;
  return (
    <View style={styles().container}>
      <Text style={styles().title}>Performance</Text>
      <Text style={styles().title}>Result</Text>
      <View style={styles().barCotainer}>
        <View style={styles().categoryWrapper}>
          <Text>performance</Text>
          <Text>{performance}</Text>
          <View style={styles((barWidth * performance) / 100).bar} />
        </View>
        <ScoreBar
          category="accessibility"
          score={accessibility}
          barWidth={barWidth}
        />
        <View style={styles().categoryWrapper}>
          <Text>{accessibility}</Text>
          <View style={styles((barWidth * accessibility) / 100).bar} />
        </View>
        <View style={styles().categoryWrapper}>
          <Text>{bestPractices}</Text>
          <View style={styles((barWidth * bestPractices) / 100).bar} />
        </View>
        <View style={styles().categoryWrapper}>
          <Text>{seo}</Text>
          <View style={styles((barWidth * seo) / 100).bar} />
        </View>
        <View style={styles().categoryWrapper}>
          <Text>{pwa}</Text>
          <View style={styles((barWidth * pwa) / 100).bar} />
        </View>
      </View>
    </View>
  );
}

PerformanceResult.propTypes = {
  performanceScore: PropTypes.shape({
    performance: PropTypes.number.isRequired,
    accessibility: PropTypes.number.isRequired,
    bestPractices: PropTypes.number.isRequired,
    seo: PropTypes.number.isRequired,
    pwa: PropTypes.number.isRequired,
  }).isRequired,
};

const styles = (barWidth) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      width: "100%",
      height: "100%",
      backgroundColor: "green",
      margin: 0,
    },
    title: {
      fontSize: 30,
      fontFamily: "FiraCode",
      color: LIGHT_GREY_150,
    },
    barCotainer: {
      width: "100%",
      alignItems: "flex-start",
    },
    categoryWrapper: {
      margin: 20,
    },
    bar: {
      width: barWidth,
      height: 30,
      backgroundColor: "red",
    },
  });
/* component ScoreBar({ performanceScore }) {
  const [barColor, setBarColor] = useState("black");

  const { width: screenWidth } = Dimensions.get("window");
  const barWidth = (screenWidth * 9) / 10;

  useEffect(() => {
    if (perfomanceScore < 30) {
      setBarColor("색상코드");
    } else if (perfomanceScore < 60) {
      setBarColor("색상코드");
    } else {
      setBarColor("만점색상코드");
    }
  }, []);
  return ();
}
*/
