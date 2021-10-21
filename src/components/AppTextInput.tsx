import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View
} from 'react-native';
import Colors from '../constants/Colors';
import { radius } from '../constants/Settings';
import { IVerifyField } from '../utils/types';

interface IProps {
  value: string;
  label?: string;
  status?: IVerifyField;
  inputRef?: any;
  warningMessage?: string;
  onChangeText?: (text: string) => void;
  inputProps?: TextInputProps;
}

const translate = (props: IProps) => ({
  value: props.value ? props.value : '',
  label: props.label ? props.label : '',
  status: props.status ? props.status : IVerifyField.empty,
  inputRef: props.inputRef ? props.inputRef : null,
  warningMessage: props.warningMessage
    ? props.warningMessage
    : 'Campo obrigatório.',
  onChangeText: props.onChangeText ? props.onChangeText : () => {},
  inputProps: props.inputProps
});

const AppTextInput = (props: IProps) => {
  const {
    value,
    label,
    inputRef,
    status,
    warningMessage,
    onChangeText,
    inputProps
  } = translate(props);
  const [showWarning, setShowWarning] = useState(false);
  const [color, setColor] = useState(Colors.light.borderColor);

  const verifyStatus = () => {
    if (status === IVerifyField.ok) {
      setColor(Colors.colors.primary);
      setShowWarning(false);
    } else if (status === IVerifyField.wrong) {
      setColor(Colors.colors.wrongError);
      setShowWarning(true);
    } else {
      setColor(Colors.light.borderColor);
      setShowWarning(false);
    }
  };

  React.useEffect(() => {
    verifyStatus();
  }, [status]);

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 70,
      marginTop: 5
    },
    input: {
      height: 45,
      padding: 10,
      borderRadius: radius,
      borderWidth: 1,
      borderColor: color,
    },
    warning: {
      fontSize: 12,
      color: Colors.colors.wrongError,
      marginTop: 5
    }
  });

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        placeholder={label}
        style={styles.input}
        onChangeText={onChangeText}
        placeholderTextColor="#999"
        ref={inputRef}
        {...inputProps}
      />
      {showWarning && <Text style={styles.warning}>{warningMessage}</Text>}
    </View>
  );
};

export default AppTextInput;
