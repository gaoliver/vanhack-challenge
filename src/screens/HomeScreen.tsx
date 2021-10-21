import { Spinner } from 'native-base';
import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import AppContainer from '../components/AppContainer';
import AppHeader from '../components/AppHeader';
import AppSearch from '../components/AppSearch';
import JobBox from '../components/JobBox';
import Colors from '../constants/Colors';
import { padding } from '../constants/Settings';
import { ApplicationReducer, getListJobs } from '../redux';
import requester from '../service/requester';
import services from '../service/service';
import { IJobProps, NavigationProp, RequestResultModel } from '../utils/types';

interface IHomeProps {
  navigation: NavigationProp;
}

const HomeScreen = ({ navigation }: IHomeProps) => {
  const [loading, setLoading] = useState(false);
  const [listLoading, setListLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();
  const jobList = useSelector(
    (state: ApplicationReducer) => state.jobsReducer.listJobs
  );
  const filteredJobList = jobList
    .filter(
      (x) =>
        x.title.toLowerCase().includes(query.toLowerCase()) ||
        x.companyName.toLowerCase().includes(query.toLowerCase()) ||
        x.skills.toLowerCase().includes(query.toLowerCase())
    )
    .filter((y) => y.location.toLowerCase().includes(location.toLowerCase()));

  const getJobs = async () => {
    setLoading(true);
    const offset = 0;
    const limit = 10;
    const service = {
      ...services.getJobSearch,
      endpoint: services.getJobSearch(offset, limit).endpoint
    };
    const result: RequestResultModel = await requester(service);
    dispatch(getListJobs(result.result.items));
    setLoading(false);
  };

  const getNewJobs = async () => {
    setListLoading(true);
    const offset = 0;
    const limit = 10;
    const service = {
      ...services.getJobSearch,
      endpoint: services.getJobSearch(offset, limit).endpoint
    };
    const result: RequestResultModel = await requester(service);
    jobList.push(...result.result.items);
    dispatch(getListJobs(jobList));
    setListLoading(false);
  };

  const onPressProduct = (item: IJobProps) => {
    navigation.navigate('JobDetail', { productId: item.id });
  };

  const renderItem = ({ item }: any) => {
    return <JobBox job={item} />;
  };

  const FooterComponent = () => {
    return listLoading ? (
      <View style={{ height: 50, width: '100%' }} />
    ) : (
      <Spinner color={Colors.colors.primary} />
    );
  };

  const handleSearch = (text: string) => {
    setQuery(text);
  };

  const handleLocationSearch = (text: string) => {
    setLocation(text);
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <AppContainer>
      <AppHeader />
      <View style={styles.content}>
        <FlatList
          data={filteredJobList}
          style={{ paddingHorizontal: padding }}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={getJobs}
              colors={[Colors.colors.primary]}
            />
          }
          ListHeaderComponent={
            <AppSearch
              query={query}
              location={location}
              onChangeQuery={handleSearch}
              onChangeLocation={handleLocationSearch}
            />
          }
          ListHeaderComponentStyle={{
            marginBottom: 10,
            backgroundColor: Colors.light.background
          }}
          ListFooterComponent={<FooterComponent />}
          stickyHeaderIndices={[0]}
          onEndReachedThreshold={0.01}
          onEndReached={getNewJobs}
        />
      </View>
    </AppContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 0,
    paddingTop: 0
  }
});
