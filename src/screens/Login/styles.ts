import { StyleSheet } from "react-native";

import { COLORS } from "../../configs";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  card_bawah: {
    width: "100%",
    height: "40%",
    backgroundColor: COLORS.green05,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  teks_judul: {
    alignSelf: "center",
    fontSize: 32,
    color: COLORS.background,
    fontWeight: "bold",
    marginTop: "10%",
  },
  teks_isi: {
    fontSize: 16,
    color: COLORS.white,
    margin: "5%",
    textAlign: "center",
  },
  button_container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "15%",
  },
  button_started: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.background,
    width: "50%",
    height: "45%",
    borderRadius: 20,
    shadowColor: COLORS.black04,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  teks_button: {
    color: COLORS.green05,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
