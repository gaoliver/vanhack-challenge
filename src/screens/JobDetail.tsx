import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import AppContainer from '../components/AppContainer';
import AppContent from '../components/AppContent';
import ScreenHeader from '../components/ScreenHeader';
import Colors from '../constants/Colors';
import { ApplicationReducer } from '../redux/reducers';
import dateFormat from '../utils/dateFormat';
import { NavigationParamsProp } from '../utils/types';

const JobDetail = ({ navigation, route }: NavigationParamsProp) => {
  const { jobId } = route.params;
  const [loading, setLoading] = useState(false);
  const jobList = useSelector(
    (state: ApplicationReducer) => state.jobsReducer.listJobs
  );
  const job = jobList.find((x) => x.id === jobId);

  const translate = {
    date: job?.createdAt ? job?.createdAt : '',
    title: job?.title ? job.title : ""
  };

  return (
    <AppContainer>
      <AppContent>
        <ScreenHeader info={dateFormat(translate.date)} />
      </AppContent>
    </AppContainer>
  );
};

export default JobDetail;

const styles = StyleSheet.create({
  
});
