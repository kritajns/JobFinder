import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import NearbyJobs from '../../components/home/nearby/NearbyJobs';
import Welcome from '../../components/home/welcome/Welcome';
// import {NearbyJobs} from '../../components';
import {COLORS, icons, images, SIZES} from '../../constants';
import ScreenHeaderBtn from '../../components/common/header/ScreenHeaderBtn';
import PopularJobs from '../../components/home/popular/PopularJobs';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
      {/* <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" /> */}
      <View style={styles.container}>
        {/* <Text>THis is Home Screen</Text> */}
        <Welcome />
        <PopularJobs />
        <NearbyJobs />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default HomeScreen;
