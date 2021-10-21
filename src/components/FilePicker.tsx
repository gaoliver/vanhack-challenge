import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';
import { IVerifyField } from '../utils/types';
import AppButton from './AppButton';

interface IProps {
  title: string;
  file?: string;
  status?: IVerifyField;
  onPress?: () => void;
  warningMessage?: string;
}

const translate = (props: IProps) => ({
  title: props.title ? props.title : 'Select your file',
  file: props.file ? props.file : '',
  warningMessage: props.warningMessage
    ? props.warningMessage
    : 'No file selected.',
  status: props.status ? props.status : IVerifyField.empty,
  onPress: props.onPress ? props.onPress : () => alert('Action')
});

const FilePicker = (props: IProps) => {
  const { title, file, onPress, warningMessage, status } = translate(props);
  const [showWarning, setShowWarning] = useState(false);

  const verifyStatus = () => {
    if (status === IVerifyField.ok) {
      setShowWarning(false);
    } else if (status === IVerifyField.wrong) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  };

  React.useEffect(() => {
    verifyStatus();
  }, [status]);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        {showWarning && <Text style={styles.warning}>{warningMessage}</Text>}
      </View>
      <AppButton
        title={file ? file : 'File picker'}
        onPress={onPress}
        fontSize={14}
        color={Colors.colors.secondary}
      />
    </View>
  );
};

export default FilePicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  title: {
    color: Colors.light.text
  },
  warning: {
    fontSize: 12,
    color: Colors.colors.wrongError,
    marginTop: 5
  }
});
