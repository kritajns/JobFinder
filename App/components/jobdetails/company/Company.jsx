import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {icons} from '../../../constants';
import { checkImageURL } from '../../../utils';
import styles from './company.style';

const Company = ({ companyLogo, jobTitle, companyName, Location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{ uri: checkImageURL(companyLogo)
            ? companyLogo
            : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqz05H.jpg'
          }}
          style={styles.logoImage}
        />
        <Text>Compnay</Text>
      </View> 

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={companyInfoBox}>
        <Text style={styles.companyName}>{companyName} /</Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode='contain'
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{Location}</Text>
        </View>
      </View>
    </View>
  )
}

export default Company;
