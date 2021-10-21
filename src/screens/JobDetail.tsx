import { Footer } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import AppButton from '../components/AppButton';

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
    title: job?.title ? job.title : ''
  };

  return (
    <AppContainer>
      <AppContent>
        <ScreenHeader
          right={dateFormat(translate.date)}
          hasInfo
          title={job?.title}
          isJob
          location={job?.location}
          relocation={job?.relocate}
          salaryFrom={job?.salaryFrom}
          salaryTo={job?.salaryTo}
          currency={job?.currency}
        />

        <View style={styles.skills}>
          <Text style={styles.skillsTitle}>
            Skills: <Text style={styles.skillsText}>{job?.skills}</Text>
          </Text>
        </View>

        <Text style={styles.description}>{job?.description}</Text>
      </AppContent>
      <Footer style={styles.footer}>
        <AppButton title="Apply now" />
      </Footer>
    </AppContainer>
  );
};

export default JobDetail;

const styles = StyleSheet.create({
  skills: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.light.grey + '2'
  },
  skillsTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.light.grey
  },
  skillsText: {
    fontWeight: 'normal',
    color: Colors.light.text
  },
  description: {
    marginTop: 20,
    color: Colors.light.text
  },
  footer: {
    paddingTop: 10,
    paddingBottom: 15,
    height: 80
  }
});
