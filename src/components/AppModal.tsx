import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { padding, radius } from '../constants/Settings';

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
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Pressable onPress={onDismiss}>
            <AntDesign name="close" size={20} />
          </Pressable>
        </View>
        {props.children}
      </View>
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
    paddingHorizontal: padding,
    paddingBottom: padding,
    borderRadius: radius,
    backgroundColor: Colors.light.background
  },
  modalHeader: {
    width: '100%',
    alignItems: 'flex-end',
    paddingTop: 15,
    paddingBottom: 20
  }
});
