import React from 'react';
import { Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native';

import Colors from '../constants/Colors';
import { padding, radius, shadowOpacity } from '../constants/Settings';

interface IProps {
  onPress?: () => void;
  boxStyle?: StyleProp<ViewStyle>;
}

const translate = (props: IProps) => ({
  onPress: props.onPress ? props.onPress : () => {},
  boxStyle: props.boxStyle ? props.boxStyle : null
});

const AppBox: React.FC<IProps> = (props) => {
  const { onPress, boxStyle } = translate(props);

  return (
    <Pressable style={[styles.boxContainer, boxStyle]} onPress={onPress}>
      {props.children}
    </Pressable>
  );
};

export default AppBox;

const styles = StyleSheet.create({
  boxContainer: {
    justifyContent: 'center',
    height: 200,
    padding: padding,
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
  }
});
