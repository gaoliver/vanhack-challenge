import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { radius } from '../constants/Settings';

interface IProps {
  info?: string;
}

const translate = (props: IProps) => ({
  info: props.info ? props.info : ''
});

const ScreenHeader = (props: IProps) => {
  const { info } = translate(props);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <View style={styles.goBackContainer}>
          <Ionicons
            name="chevron-back-outline"
            color={Colors.light.accentText}
            size={16}
          />
          <Text style={[styles.info, { fontWeight: 'normal' }]}>Back</Text>
        </View>
        <Text style={styles.info}>{info}</Text>
      </View>
      <View style={[styles.headerContent, styles.infoHeader]}>
        <Text style={styles.title}>Title</Text>
        <View style={[styles.row, styles.infoContainer]}>
          <View style={styles.row}>
            <Feather name="map-pin" style={styles.icon} />
            <Text style={styles.infoText}>Location</Text>
          </View>
          <View style={styles.row}>
            <MaterialIcons name="work-outline" size={13} style={styles.icon} />
            <Text style={styles.infoText}>Relocation</Text>
          </View>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="cash-usd-outline" size={18} style={[styles.icon, {marginTop: 0}]} color={Colors.colors.secondary} />
          <Text style={styles.salary}>1000000</Text>
        </View>
      </View>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between'
  },
  headerContent: {
    height: 40,
    paddingLeft: 5,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: radius + 5,
    backgroundColor: Colors.colors.primary
  },
  infoHeader: {
    height: 'auto',
    paddingLeft: 20,
    paddingRight: 20,
    paddingVertical: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: Colors.light.header
  },
  goBackContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  info: {
    fontSize: 14,
    color: Colors.light.accentText,
    fontWeight: 'bold'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.light.text
  },
  infoContainer: {
    width: '100%',
    justifyContent: 'space-evenly',
    marginVertical: 15
  },
  infoText: {
    color: Colors.light.text
  },
  salary: {
    fontWeight: "bold",
    fontSize: 16,
    color: Colors.colors.secondary
  },
  row: {
    flexDirection: 'row'
  },
  icon: {
    marginRight: 5,
    marginTop: 2
  }
});
