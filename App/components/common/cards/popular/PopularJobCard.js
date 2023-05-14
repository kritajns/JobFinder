import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {icons} from '../../../../constants';
import styles from './popularjobcard.style';

const PopularJobCard = ({item, selectedJob, handleCardPress}) => {
  return (
    <TouchableOpacity style={styles.container(selectedJob, item)}>
      <TouchableOpacity>
        <Image style={styles.logoImage} />
      </TouchableOpacity>
      <Text>Company Name</Text>
      <View>
        <Text>Job Title</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
