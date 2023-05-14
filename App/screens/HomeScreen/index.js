import React from "react";
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import NearbyJobs from "../../components/home/nearby/NearbyJobs";
import Welcome from "../../components/home/welcome/Welcome";
// import {NearbyJobs} from '../../components';
import { COLORS, icons, images, SIZES } from "../../constants";
import ScreenHeaderBtn from "../../components/common/header/ScreenHeaderBtn";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScreenHeaderBtn />
      <View style={styles.container}>
        <Text>THis is Home Screen</Text>
        <Welcome />
        <NearbyJobs />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
