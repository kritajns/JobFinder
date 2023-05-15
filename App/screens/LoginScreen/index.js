import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import useFetch from '../../hook/useFetch';

const SignInScreen = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);

  const handleSelection = index => {
    setSelectedItem(index);
  };

  const {data, isLoading, error} = useFetch();

  const renderListItem = item => {
    return (
      <View style={styles.boxContainer}>
        <View style={styles.content}>
          <View style={styles.fbIcon}>
            <Icon name="facebook-official" size={30} style={styles.fb} />
          </View>
          <View style={{marginRight: 40}}>
            <Text>Facebook</Text>
            <Text style={{fontSize: 16, fontWeight: '600'}}>
              Full time UI Designer
            </Text>
            <Text style={{marginTop: 10}}>$8k - Tokyo, Japan</Text>
          </View>
          <View>
            <Icon name="heart-o" size={20} style={{color: 'grey'}} />
            <View style={{marginTop: 15}} />
            <Text style={{marginTop: 10}}>24h</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.headerContent}>
          <Text style={styles.header}>UI/UX Design</Text>
          <View style={styles.iconContainer}>
            <AntIcon name="filter" size={20} style={styles.icon} />
          </View>
        </View>
        <Text style={styles.miniText}>32 Job Opportunity</Text>
        <View style={styles.tagContainer}>
          <TouchableOpacity
            style={[
              styles.wrapper,
              selectedItem === 0 && styles.selectedOption,
            ]}
            onPress={() => handleSelection(0)}>
            <Text
              style={[
                styles.optionText,
                selectedItem === 0 && styles.selectedText,
              ]}>
              Most Relevant
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.wrapper,
              selectedItem === 1 && styles.selectedOption,
            ]}
            onPress={() => handleSelection(1)}>
            <Text
              style={[
                styles.optionText,
                selectedItem === 1 && styles.selectedText,
              ]}>
              Most Recent
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={data}
            renderItem={renderListItem}
            keyExtractor={item => item?.job_id}
          />
        </View>

        {/* <View style={styles.boxContainer}>
          <View style={styles.content}>
            <View style={styles.fbIcon}>
              <Icon name="facebook-official" size={30} style={styles.fb} />
            </View>
            <View style={{marginRight: 40}}>
              <Text>Facebook</Text>
              <Text style={{fontSize: 16, fontWeight: '600'}}>
                Full time UI Designer
              </Text>
              <Text style={{marginTop: 10}}>$8k - Tokyo, Japan</Text>
            </View>
            <View>
              <Icon name="heart-o" size={20} style={{color: 'grey'}} />
              <View style={{marginTop: 15}} />
              <Text style={{marginTop: 10}}>24h</Text>
            </View>
          </View>
        </View> */}

        {/* <View style={styles.boxContainer}>
          <View style={styles.content}>
            <View style={styles.fbIcon}>
              <Icon
                name="amazon"
                size={20}
                style={[
                  styles.fb,
                  {
                    backgroundColor: 'orange',
                    color: 'white',
                    padding: 4,
                    borderRadius: 5,
                  },
                ]}
              />
            </View>
            <View style={{marginRight: 40}}>
              <Text>Amazon</Text>
              <Text style={{fontSize: 16, fontWeight: '600'}}>
                Sr Product Designer
              </Text>
              <Text style={{marginTop: 10}}>$8k - Berlin, Germany</Text>
            </View>
            <View>
              <Icon name="heart-o" size={20} style={{color: 'grey'}} />
              <View style={{marginTop: 15}} />
              <Text style={{marginTop: 10}}>6d</Text>
            </View>
          </View>
        </View> */}

        {/* <View style={styles.boxContainer}>
          <View style={styles.content}>
            <View style={styles.fbIcon}>
              <Icon
                name="google"
                size={20}
                style={[
                  styles.fb,
                  {
                    backgroundColor: 'white',
                    color: 'red',
                    padding: 4,
                    borderRadius: 5,
                  },
                ]}
              />
            </View>
            <View style={{marginRight: 40}}>
              <Text>Google</Text>
              <Text style={{fontSize: 16, fontWeight: '600'}}>
                User Experience Researcher
              </Text>
              <Text style={{marginTop: 10}}>$8k - Berlin, Germany</Text>
            </View>
            <View>
              <Icon name="heart-o" size={20} style={{color: 'grey'}} />
              <View style={{marginTop: 15}} />
              <Text style={{marginTop: 10}}>6d</Text>
            </View>
          </View>
        </View> */}
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
    backgroundColor: 'lightgrey',
    borderRadius: 15,
    padding: 15,
    marginRight: 10,
    marginVertical: 25,
  },
  selectedOption: {
    backgroundColor: 'darkblue',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'grey',
  },
  selectedText: {
    color: 'white',
  },
  boxContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  fbIcon: {
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    width: 45,
    height: 46,
  },
  fb: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'darkblue',
  },
});

export default SignInScreen;
