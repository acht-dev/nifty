import React from "react";
import { SafeAreaView, View } from "react-native";

import styles from "./styles";

import Header from "./components/Header";
import Card from "./components/Card";

const Component = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <Header />
        <Card />
      </View>
    </SafeAreaView>
  );
};

export default Component;
