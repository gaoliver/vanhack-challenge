import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { IJobProps } from '../utils/types';
import AppBox from './AppBox';

type IJobBoxProps = { job: IJobProps };

const JobBox = ({ job }: IJobBoxProps) => {
  return (
    <AppBox boxStyle={{ justifyContent: "space-between" }}>
      <Text style={styles.title}>{job.title}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Feather name="map-pin" style={styles.icon} />
          <Text style={styles.location}>{job.location}</Text>
        </View>
        <View style={styles.row}>
          <Feather name="map-pin" style={styles.icon} />
          <Text style={styles.location}>{job.relocate}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <MaterialCommunityIcons name="cash-usd-outline" style={styles.icon} size={14} color={Colors.colors.secondary} />
        <Text
          style={styles.salary}
        >{`${job.salaryFrom} up to ${job.salaryTo}`}</Text>
      </View>
      <Text style={styles.description} numberOfLines={3}>
        {job.description}
      </Text>
      <Text
        style={styles.skills}
        numberOfLines={2}
      >{`Skills: ${job.skills}`}</Text>
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
    marginTop: 5,
    justifyContent: 'space-between'
  },
  location: {
    fontSize: 12,
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
  skills: {
    fontSize: 11,
    color: Colors.light.grey
  },
  icon: {
    marginRight: 5
  },
  row: {
    flexDirection: 'row'
  }
});
