import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const Profile = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>This is My Profile.</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Profile;
