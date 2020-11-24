import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";

import { IMAGES } from "../../configs";
import styles from "./styles";

const Component = () => {
  useIsFocused();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground source={IMAGES.background1} style={styles.image}>
          <View style={styles.card_bawah}>
            <Text style={styles.teks_judul}>nifty</Text>
            <Text style={styles.teks_isi}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet
              consectetur adipisicing elit
            </Text>
            <View style={styles.button_container}>
              <TouchableOpacity
                style={styles.button_started}
                onPress={() => navigation.navigate("Beranda")}
              >
                <Text style={styles.teks_button}>Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Component;
