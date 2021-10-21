import React from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native';

import Colors from '../constants/Colors';
import { padding, radius, shadowOpacity } from '../constants/Settings';
import { Header } from 'native-base';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const AppHeader = () => {
  return (
    <Header style={styles.headerContainer} androidStatusBarColor={Colors.light.statusbar} noShadow hasTabs>
      <Text style={styles.headerTitle}>JobSearch</Text>
    </Header>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'column',
    height: 70,
    width: deviceWidth,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.light.boxBackground,
    paddingLeft: padding,
    paddingRight: padding,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.colors.primary,
    fontFamily: 'Anton_400Regular'
  },
});
