import { Spinner } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';

const AppSpinner = () => {
  return <Spinner color={Colors.colors.primary} />;
};

export default AppSpinner;
