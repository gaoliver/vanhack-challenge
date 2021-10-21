import { Container } from 'native-base';
import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import Colors from '../constants/Colors';

interface IProps {
  style?: StyleProp<ViewStyle>
}

const AppContainer: React.FC<IProps> = ({ style, children }) => {
  return <Container style={[styles.container, style]}>{children}</Container>;
};

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background
  }
});
