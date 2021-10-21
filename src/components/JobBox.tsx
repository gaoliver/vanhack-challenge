import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';
import { radius, shadowOpacity } from '../constants/Settings';
import { IJobProps } from '../utils/types';

type IJobBoxProps = { job: IJobProps };

const JobBox = ({ job }: IJobBoxProps) => {
  return (
    <View style={styles.boxContainer}>
      <Text style={styles.title}>{job.title}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.location}>{job.location}</Text>
        <Text style={styles.location}>{job.relocate}</Text>
      </View>
      <Text
        style={styles.salary}
      >{`${job.salaryFrom} up to ${job.salaryTo}`}</Text>
      <Text style={styles.description} numberOfLines={3}>
        {job.description}
      </Text>
      <Text
        style={styles.skills}
        numberOfLines={2}
      >{`Skills: ${job.skills}`}</Text>
    </View>
  );
};

export default JobBox;

const styles = StyleSheet.create({
  boxContainer: {
    justifyContent: 'center',
    height: 200,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.light.boxBackground,
    marginBottom: 10,
    borderRadius: radius,
    elevation: 3,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowRadius: 3,
    shadowOpacity: shadowOpacity
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.colors.primary
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: 5
  },
  location: {
    fontSize: 12,
    marginRight: 10,
    marginBottom: 5
  },
  salary: {
    fontWeight: 'bold',
    fontSize: 12,
    color: Colors.colors.secondary
  },
  description: {
    width: '100%',
    fontSize: 12,
    marginVertical: 10
  },
  skills: {
    fontSize: 11
  }
});
