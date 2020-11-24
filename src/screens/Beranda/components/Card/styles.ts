import { StyleSheet } from "react-native";

import { COLORS } from "../../../../configs";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  card: {
    backgroundColor: COLORS.navy,
    height: "60%",
    borderRadius: 20,
    elevation: 4,
    shadowOffset: { height: 5, width: 5 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  card_atas: {
    backgroundColor: COLORS.background,
    height: "80%",
    borderRadius: 20,
    flexDirection: "row",
  },
  footer_card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  teks_kategori: {
    fontSize: 18,
    padding: 10,
    fontWeight: "bold",
    color: COLORS.gold,
    marginLeft: "25%",
  },
  arrow_button: {
    width: 20,
    height: 20,
    marginRight: "4%",
  },
  gambar_kategori: {
    width: 160,
    height: 160,
    justifyContent: "center",
    alignSelf: "center",
    margin: "3%",
    borderRadius: 80,
  },
  deskripsi: {
    color: COLORS.gold02,
    fontSize: 16,
    marginTop: "4%",
  },
});

export default styles;
