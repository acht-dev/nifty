import React from "react";
import { Image, Text, View } from "react-native";

import styles from "./styles";
import { IMAGES } from "../../../../configs";

const Component = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.card_atas}>
          <View>
            <Image
              source={IMAGES.image_kategori}
              style={styles.gambar_kategori}
            />
          </View>
          <View style={{ width: "45%" }}>
            <Text style={styles.deskripsi}>
              An Architect is a person with the Introverted, Intuituve,
              Thinking, and Judging personality traits. These thoughtful
              tacticians love perfecting the details...
            </Text>
          </View>
        </View>
        <View style={styles.footer_card}>
          <View>
            <Text style={styles.teks_kategori}>Architect</Text>
          </View>
          <View>
            <Image source={IMAGES.logo_arrow} style={styles.arrow_button} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Component;
