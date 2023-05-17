import React, {useState, useCallback} from 'react';
import {SafeAreaView, ScrollView, View, Text, TouchableOpacity, ActivityIndicator, RefreshControl} from 'react-native';
import { COLORS, icons, SIZES } from '../../constants';
import ScreenHeaderBtn from '../../components/common/header/ScreenHeaderBtn';
import useFetch from '../../hook/useFetch';
import { useNavigation } from '@react-navigation/native';

const JobDetails = () => {
  const Navigation = useNavigation();
  const {data, isLoading, error} = useFetch();

  return (
    <SafeAreaView>
        <ScreenHeaderBtn />
      <ScrollView showsVerticalScrollIndicator={false}>

      </ScrollView>
    </SafeAreaView>
  )
}

export default JobDetails;
