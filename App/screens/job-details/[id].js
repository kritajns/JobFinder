import React, {useState, useCallback} from 'react';
import {SafeAreaView, ScrollView, View, Text, TouchableOpacity, ActivityIndicator, RefreshControl} from 'react-native';
import { COLORS, icons, SIZES } from '../../constants';
import ScreenHeaderBtn from '../../components/common/header/ScreenHeaderBtn';
import useFetch from '../../hook/useFetch';
import { useNavigation, useRoute } from '@react-navigation/native';
import Company from '../../components/jobdetails/company/Company';
import Tabs from '../../components/jobdetails/tabs/Tabs';
import {Specifics, JobAbout, JobFooter} from '../../components';

const JobDetails = ({ jobId }) => {
  const Navigation = useNavigation();
  const route = useRoute();
  const params = route.params;
  
  const {data, isLoading, error, refetch} = useFetch('job-details', {
    job_id: 'ps4lEfc1C2gAAAAAAAAAAA==',
  });

  console.log('params-=-==-', data);

  const tabs = ['About', 'Qualifications', 'Responsibilities'];

  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const onRefresh = () => {};

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return <Specifics
          title="Qualifications"
          points={data[0].job_highlights?.qualifications ?? ['N/A']}
        />
      case "About":
        return <JobAbout
          info={data[0].job_description ?? ['No data provided'] }
        />
      case "Responsibilities":
        return <Specifics
          title="Responsibilities"
          points={data[0].job_highlights?.responsibilities ?? ['N/A']}
        />
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10}}>
        <ScreenHeaderBtn
          iconUrl={icons.left}
          dimension="60%"
          handlePress={() => Navigation.goBack()}
        />
        <ScreenHeaderBtn
          iconUrl={icons.share}
          dimension="60%"
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        {!isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Why Error</Text>
        ) : !data || data.length === 0 ? (
          <Text>No Data</Text>
        ) : (
          <View style={{padding: SIZES.medium, paddingBottom: 100}}>
            <Company
              companyLogo={data[0].employer_logo}
              jobTitle={data[0].job_title}
              companyName={data[0].employer_logo}
              Location={data[0].employer_logo}
            />
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            {displayTabContent()}
          </View>
        )}
      </ScrollView>

      <JobFooter url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results'} />
    </SafeAreaView>
  )
}

export default JobDetails;
