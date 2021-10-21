import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import Colors from '../constants/Colors';
import { radius } from '../constants/Settings';

interface IProps {
  isVisible: boolean;
  onDismiss?: () => void;
}

const translate = (props: IProps) => ({
  isVisible: props.isVisible ? props.isVisible : false,
  onDismiss: props.onDismiss ? props.onDismiss : () => {}
});

const AppModal: React.FC<IProps> = (props) => {
  const { isVisible, onDismiss } = translate(props);

  return (
    <ReactNativeModal
      isVisible={isVisible}
      onBackButtonPress={onDismiss}
      onBackdropPress={onDismiss}
      onDismiss={onDismiss}
    >
      <View style={styles.modalContainer}>{props.children}</View>
    </ReactNativeModal>
  );
};

export default AppModal;

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: radius,
    backgroundColor: Colors.light.background
  }
});
