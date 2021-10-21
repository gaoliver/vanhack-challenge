import { Container } from 'native-base';
import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import { padding } from '../constants/Settings';

interface IProps {
  loadingIndicator?: boolean;
  loadAction?: () => void;
  style?: StyleProp<ViewStyle>;
}

const AppContent: React.FC<IProps> = ({ style, children }) => {
  return <Container style={[styles.container, style]}>{children}</Container>;
};

export default AppContent;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: padding,
    backgroundColor: 'transparent'
  }
});
