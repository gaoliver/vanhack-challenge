import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {
  Ionicons,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons
} from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { radius } from '../constants/Settings';
import relocateFormat from '../utils/relocateFormat';
import currencyFormat from '../utils/currencyFormat';
import { useNavigation } from '@react-navigation/native';

interface IProps {
  right?: string;
  title?: string;
  location?: string;
  relocation?: string;
  salaryFrom?: number;
  salaryTo?: number;
  currency?: string;
  hasInfo?: boolean;
  isJob?: boolean;
}

const translate = (props: IProps) => ({
  right: props.right ? props.right : '',
  title: props.title ? props.title : '',
  location: props.location ? props.location : '',
  relocation: props.relocation ? relocateFormat(props.relocation) : '',
  salaryFrom: props.salaryFrom ? currencyFormat(props.salaryFrom) : 0,
  salaryTo: props.salaryTo ? currencyFormat(props.salaryTo) : 0,
  currency: props.currency ? props.currency : '',
  hasInfo: props.hasInfo ? true : false,
  isJob: props.isJob ? true : false
});

const ScreenHeader = (props: IProps) => {
  const navigation = useNavigation();
  const {
    right,
    title,
    location,
    relocation,
    salaryFrom,
    salaryTo,
    currency,
    hasInfo,
    isJob
  } = translate(props);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <Pressable style={styles.goBackContainer} onPress={goBack}>
          <Ionicons
            name="chevron-back-outline"
            color={Colors.light.accentText}
            size={16}
          />
          <Text style={[styles.info, { fontWeight: 'normal' }]}>Back</Text>
        </Pressable>
        <Text style={styles.info}>{right}</Text>
      </View>
      {hasInfo && (
        <View style={[styles.headerContent, styles.infoHeader]}>
          <Text style={styles.title}>{title}</Text>
          {isJob && (
            <>
              <View style={[styles.row, styles.infoContainer]}>
                <View style={styles.row}>
                  <Feather name="map-pin" style={styles.icon} size={10} />
                  <Text style={styles.infoText} numberOfLines={2}>
                    {location}
                  </Text>
                </View>
                <View style={styles.row}>
                  <MaterialIcons
                    name="work-outline"
                    size={11}
                    style={styles.icon}
                  />
                  <Text style={styles.infoText}>{relocation}</Text>
                </View>
              </View>
              <View style={styles.row}>
                <MaterialCommunityIcons
                  name="cash-usd-outline"
                  size={16}
                  style={[styles.icon, { marginTop: 0 }]}
                  color={Colors.colors.secondary}
                />
                <Text
                  style={styles.salary}
                >{`${salaryFrom} up to ${salaryTo} (${currency}/Annual)`}</Text>
              </View>
            </>
          )}
        </View>
      )}
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    marginBottom: 10
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
    fontSize: 16,
    color: Colors.light.text
  },
  infoContainer: {
    width: '100%',
    justifyContent: 'space-evenly',
    marginVertical: 20
  },
  infoText: {
    maxWidth: 140,
    fontSize: 11,
    color: Colors.light.text
  },
  salary: {
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.colors.secondary
  },
  row: {
    flexDirection: 'row'
  },
  icon: {
    marginRight: 2,
    marginTop: 1
  }
});
