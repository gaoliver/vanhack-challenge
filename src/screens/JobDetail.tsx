import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from '../components/AppContainer';
import AppContent from '../components/AppContent';
import { NavigationParamsProp } from '../utils/types';

const JobDetail = ({ navigation, route }: NavigationParamsProp) => {
  const { jobId } = route.params;

  return (
    <AppContainer>
      <AppContent>
        <Text>{`Olá ${jobId}`}</Text>
      </AppContent>
    </AppContainer>
  );
};

export default JobDetail;

const styles = StyleSheet.create({});
