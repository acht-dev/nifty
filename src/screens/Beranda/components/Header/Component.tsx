import React from "react";
import { Image, Text, View } from "react-native";

import styles from "./styles";
import { IMAGES } from "../../../../configs";

const Component = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.teks_welcome}>Welcome,</Text>
        <Text style={styles.teks_nama}>Gilang Aroempinang</Text>
      </View>
      <View style={styles.frame_image}>
        <Image source={IMAGES.profile} style={styles.image_profile} />
      </View>
    </View>
  );
};

export default Component;
