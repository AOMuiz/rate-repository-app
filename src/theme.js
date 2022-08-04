import { Platform } from "react-native";

const theme = {
  roundness: 3,
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    appBarBackground: "#24292e",
    primary: "#0366d6",
    mainBackground: "#ddd",
    error: "#d73a4a",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
