import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';
import { padding, radius, shadowOpacity } from '../constants/Settings';
import { IJobProps } from '../utils/types';

type IJobBoxProps = { job: IJobProps };

const JobBox = ({ job }: IJobBoxProps) => {
  return (
    <View style={styles.boxContainer}>
      <Text style={styles.title}>{job.title}</Text>
    </View>
  );
};

export default JobBox;

const styles = StyleSheet.create({
  boxContainer: {
    justifyContent: "center",
    height: 120,
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
    fontWeight: "bold",
    color: Colors.colors.primary
  },
  infoContainer: {},
  location: {},
  salary: {},
  description: {},
  skills: {}
});
