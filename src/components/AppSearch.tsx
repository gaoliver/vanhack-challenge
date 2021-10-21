import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { radius, shadowOpacity } from '../constants/Settings';

interface IProps {
  query: string;
  onChangeQuery?: (text: string) => void;
  location: string;
  onChangeLocation?: (text: string) => void;
}

const translate = (props: IProps) => ({
  query: props.query ? props.query : '',
  location: props.location ? props.location : '',
  onChangeQuery: props.onChangeQuery ? props.onChangeQuery : () => {},
  onChangeLocation: props.onChangeLocation ? props.onChangeLocation : () => {}
});

const AppSearch = (props: IProps) => {
  const { query, onChangeQuery, location, onChangeLocation } = translate(props);

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchField}>
        <Feather
          name="search"
          style={styles.searchIcon}
          color={Colors.colors.primary}
        />
        <TextInput
          value={query}
          placeholder="Job title"
          style={styles.searchInput}
          onChangeText={(text) => onChangeQuery(text)}
        />
        <Feather
          name="map-pin"
          style={styles.searchIcon}
          color={Colors.colors.primary}
        />
        <TextInput
          value={location}
          placeholder="Location"
          style={[styles.searchInput, { flex: 0, width: 100 }]}
          onChangeText={(text) => onChangeLocation(text)}
        />
      </View>
    </View>
  );
};

export default AppSearch;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    marginTop: 15
  },
  searchField: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.colors.primary,
    backgroundColor: Colors.light.boxBackground,
    borderRadius: radius,
    padding: 5,
    elevation: 3,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowRadius: 3,
    shadowOpacity: shadowOpacity
  },
  searchIcon: {
    width: 20
  },
  searchInput: {
    flex: 1,
    height: '100%'
  },
  locationField: {}
});
