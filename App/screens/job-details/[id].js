import React, {useState, useCallback} from 'react';
import {SafeAreaView, ScrollView, View, Text, TouchableOpacity, ActivityIndicator, RefreshControl} from 'react-native';
import { COLORS, icons, SIZES } from '../../constants';
import ScreenHeaderBtn from '../../components/common/header/ScreenHeaderBtn';
import useFetch from '../../hook/useFetch';
import { useNavigation } from '@react-navigation/native';

const JobDetails = () => {
  const Navigation = useNavigation();
  const {data, isLoading, error} = useFetch();

  const tabs = ['About', 'Qualifications', 'Responsibilities'];

  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const onRefresh = () => {};

  const displayTabContent = () => {};

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
        <ScreenHeaderBtn
          iconUrl={icons.left}
          dimension="60%"
          handlePress={() => Navigation.goBack()}
        />
        <ScreenHeaderBtn
          iconUrl={icons.share}
          dimension="60%"
        />
      <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Error</Text>
        ) : data.length === 0 ? (
          <Text>No Data</Text>
        ) : (
          <View style={{padding: SIZES.medium, paddingBottom: 100}}>
            <Company
              companyLogo={data[0].employer_logo}
              jobTitle={data[0].job_title}
              companyName={data[0].employer_logo}
              Location={data[0].employer_logo}
            />
            <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            {displayTabContent()}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default JobDetails;
