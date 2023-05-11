import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const SignInScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.headerContent}>
          <Text style={styles.header}>UI/UX Design</Text>
          <View style={styles.iconContainer}>
            <Icon name="filter" size={20} style={styles.icon} />
          </View>
        </View>
        <Text style={styles.miniText}>32 Job Opportunity</Text>
        <View style={styles.tagContainer}>
          <View style={styles.wrapper}>
            <Text>Most Relevant</Text>
          </View>
          <View style={styles.wrapper}>
            <Text>Most Recent</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: 1,
  },
  iconContainer: {
    height: 30,
    width: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  icon: {
    color: 'white',
  },
  miniText: {
    fontSize: 12,
    fontWeight: '400',
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: 'grey',
    borderRadius: 15,
    padding: 15,
    marginRight: 10,
    marginVertical: 25,
  },
});

export default SignInScreen;
