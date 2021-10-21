import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';
import { radius } from '../constants/Settings';

interface IProps {
  title?: string;
  onPress?: () => void;
  color?: string;
}

const translate = (props: IProps) => ({
  title: props.title ? props.title : '',
  color: props.color ? props.color : Colors.colors.primary,
  onPress: props.onPress
    ? props.onPress
    : () => {
        alert('pressed');
      }
});

const AppButton = (props: IProps) => {
  const { title, onPress, color } = translate(props);

  const styles = StyleSheet.create({
    buttonContainer: {
      minWidth: 200,
      paddingVertical: 10,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: color,
      borderRadius: radius,
    },
    buttonText: {
      fontSize: 20,
      fontWeight: "bold",
      color: Colors.light.accentText
    }
  });

  return (
    <Pressable style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default AppButton;
