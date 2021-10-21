import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';
import AppModal from './AppModal';

interface IProps {
  isVisible: boolean;
  message: string;
  onDismiss?: () => void;
}

const translate = (props: IProps) => ({
  isVisible: props.isVisible ? props.isVisible : false,
  message: props.message ? props.message : "Alert!",
  onDismiss: props.onDismiss ? props.onDismiss : () => {}
});

const AppAlert = (props: IProps) => {
  const { isVisible, message, onDismiss } = translate(props);

  return (
    <AppModal isVisible={isVisible} onDismiss={onDismiss}>
      <Text style={styles.text}>{message}</Text>
    </AppModal>
  );
};

export default AppAlert;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.light.text
  }
});
