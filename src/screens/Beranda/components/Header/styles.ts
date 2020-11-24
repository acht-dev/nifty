import { StyleSheet } from "react-native";

import { COLORS } from "../../../../configs";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  teks_welcome: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.green05,
  },
  teks_nama: {
    fontSize: 16,
    color: COLORS.grey2,
  },
  frame_image: {
    width: 44,
    height: 44,
    backgroundColor: COLORS.grey2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
  },
  image_profile: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },
});

export default styles;
