import { useState, useEffect } from "react";
import {
  KeyboardAvoidingView as View,
  StatusBar,
  Dimensions,
} from "react-native";
import { WebView } from "react-native-webview";

const statusBarHeight = StatusBar.currentHeight;
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function Editor() {
  const [dimensions, setDimensions] = useState({ window, screen });
  console.log(dimensions.window, dimensions.screen);

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      },
    );
    return () => subscription?.remove();
  });

  return (
    <View style={{ marginTop: statusBarHeight, flex: 1 }}>
      <WebView source={{ uri: "http://192.168.0.50:3000" }} />
    </View>
  );
}
