import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './nearbyjobs.style';
import {COLORS, SIZES} from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/useFetch';
import { useNavigation, useRoute } from '@react-navigation/native';

const NearbyJobs = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {data, isLoading, error} = useFetch
  ('search', {
      query: 'React developer',
      num_pages: 1
    })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {!isLoading ? (
          <ActivityIndicator />
        ) : error ? (
          <Text> Some Error </Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => navigation.navigate('JobDetails', { jobId: job.job_id})}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;
