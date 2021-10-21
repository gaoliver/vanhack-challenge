import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import Colors from '../constants/Colors';
import { radius } from '../constants/Settings';

interface IProps {
  isVisible: boolean;
}

const translate = (props: IProps) => ({
  isVisible: props.isVisible ? props.isVisible : false
});

const AppModal: React.FC<IProps> = (props) => {
  const { isVisible } = translate(props);

  return (
    <ReactNativeModal isVisible={isVisible}>
      <View style={styles.modalContainer}>{props.children}</View>
    </ReactNativeModal>
  );
};

export default AppModal;

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    minHeight: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: radius,
    backgroundColor: Colors.light.background
  }
});
