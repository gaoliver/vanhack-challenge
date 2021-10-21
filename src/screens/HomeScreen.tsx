import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import AppContainer from '../components/AppContainer';
import AppContent from '../components/AppContent';
import AppHeader from '../components/AppHeader';
import AppSearch from '../components/AppSearch';
import JobBox from '../components/JobBox';
import Colors from '../constants/Colors';
import { padding } from '../constants/Settings';
import { ApplicationReducer, getListJobs } from '../redux';
import requester from '../service/requester';
import services from '../service/service';
import { NavigationProp, RequestResultModel } from '../utils/types';

interface IHomeProps {
  navigation: NavigationProp;
}

const HomeScreen = ({ navigation }: IHomeProps) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const jobList = useSelector(
    (state: ApplicationReducer) => state.jobsReducer.listJobs
  );

  const getProducts = async () => {
    setLoading(true);
    const { getJobSearch: service } = services;
    const result: RequestResultModel = await requester(service);
    dispatch(getListJobs(result.result.items));
    setLoading(false);
  };

  const onPressProduct = () => {
    navigation.navigate('JobDetail');
  };

  const renderItem = ({ item }: any) => {
    return <JobBox job={item} />;
  };

  const FooterComponent = () => {
    return (
      <View style={{ height: 50, width: "100%" }} />
    )
  }

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <AppContainer>
      <AppHeader />
      <AppContent style={{ paddingHorizontal: 0, paddingTop: 0 }}>
        <FlatList
          data={jobList}
          style={{ paddingHorizontal: padding }}
          renderItem={renderItem}
          ListHeaderComponent={<AppSearch />}
          ListHeaderComponentStyle={{
            marginBottom: 10,
            backgroundColor: Colors.light.background
          }}
          ListFooterComponent={<FooterComponent />}
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}
        />
      </AppContent>
    </AppContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
