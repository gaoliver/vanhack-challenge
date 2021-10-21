import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { IJobProps } from '../utils/types';
import AppBox from './AppBox';
import dateFormat from '../utils/dateFormat';
import relocateFormat from '../utils/relocateFormat';
import currencyFormat from '../utils/currencyFormat';

type IJobBoxProps = {
  job: IJobProps;
  onPress?: () => void;
};

const translate = (props: IJobBoxProps) => ({
  job: props.job && props.job,
  onPress: props.onPress ? props.onPress : () => {}
});

const JobBox = (props: IJobBoxProps) => {
  const { job, onPress } = translate(props);

  return (
    <AppBox boxStyle={{ justifyContent: 'space-between' }} onPress={onPress}>
      <Text style={styles.title}>{job.title}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Feather name="map-pin" style={styles.icon} />
          <Text style={styles.location}>{job.location}</Text>
        </View>
        <View style={styles.row}>
          <MaterialIcons name="work-outline" style={styles.icon} />
          <Text style={styles.location}>{relocateFormat(job.relocate)}</Text>
        </View>
        <Text style={styles.location}>{`Posted ${dateFormat(
          job.createdAt
        )}`}</Text>
      </View>
      <View style={styles.row}>
        <MaterialCommunityIcons
          name="cash-usd-outline"
          style={styles.icon}
          size={14}
          color={Colors.colors.secondary}
        />
        <Text style={styles.salary}>{`${currencyFormat(
          job.salaryFrom
        )} up to ${currencyFormat(job.salaryTo)} (${job.currency}/Annual)`}</Text>
      </View>
      <Text style={styles.description} numberOfLines={3}>
        {job.description}
      </Text>
      <View style={styles.skillsContainer}>
        <Text
          style={styles.skills}
          numberOfLines={2}
        >{`Skills: ${job.skills}`}</Text>
      </View>
    </AppBox>
  );
};

export default JobBox;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.colors.primary
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  location: {
    fontSize: 11,
    marginRight: 10,
    marginBottom: 5,
    color: Colors.light.text
  },
  salary: {
    fontWeight: 'bold',
    fontSize: 12,
    color: Colors.colors.secondary
  },
  description: {
    width: '100%',
    fontSize: 12,
    marginVertical: 15,
    color: Colors.light.text
  },
  skillsContainer: {
    backgroundColor: Colors.light.background,
    padding: 5,
    borderRadius: 5
  },
  skills: {
    fontSize: 11,
    color: Colors.light.grey
  },
  icon: {
    marginRight: 5
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
