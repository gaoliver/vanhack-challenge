import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import { IVerifyField } from '../utils/types';
import AppButton from './AppButton';
import AppModal from './AppModal';
import AppTextInput from './AppTextInput';

interface IProps {
  isVisible: boolean;
}

const translate = (props: IProps) => ({
  isVisible: props.isVisible ? props.isVisible : false
});

const AppForm = (props: IProps) => {
  const { isVisible } = translate(props);
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    noticePeriod: '',
    cvFile: '',
    presentationVideo: ''
  });

  const [nameWarning, setNameWarning] = useState<IVerifyField>();
  const [surnameWarning, setSurnameWarning] = useState<IVerifyField>();
  const [emailWarning, setEmailWarning] = useState<IVerifyField>();
  const [noticePeriodWarning, setNoticePeriodWarning] =
    useState<IVerifyField>();
  const [cvFileWarning, setCVFileWarning] = useState<IVerifyField>();
  const [presentationVideoWarning, setPresentationVideoWarning] =
    useState<IVerifyField>();

  const nameRef = useRef<any>(null);
  const surnameRef = useRef<any>(null);
  const emailRef = useRef<any>(null);
  const noticeRef = useRef<any>(null);
  const cvRef = useRef<any>(null);
  const presentationRef = useRef<any>(null);

  const verifyName = () => {
    setNameWarning(IVerifyField.empty);
  };
  const verifySurname = () => {
    setSurnameWarning(IVerifyField.empty);
  };
  const verifyEmail = () => {
    setEmailWarning(IVerifyField.empty);
  };
  const verifyNotice = () => {
    setNoticePeriodWarning(IVerifyField.empty);
  };
  const verifyCVFile = () => {
    setCVFileWarning(IVerifyField.empty);
  };
  const verifyPresentation = () => {
    setPresentationVideoWarning(IVerifyField.empty);
  };

  const onApply = () => {
    let isNameValid;
    let isSurnameValid;
    let isEmailValid;
    let isNoticeValid;
    let isCVFileValid;
    let isPresentationValid;

    if (form.name === '') {
      setNameWarning(IVerifyField.wrong);
      isNameValid = false;
    } else {
      isNameValid = true;
    }

    if (form.surname === '') {
      setSurnameWarning(IVerifyField.wrong);
      isSurnameValid = false;
    } else {
      isSurnameValid = true;
    }

    if (form.email === '') {
      setEmailWarning(IVerifyField.wrong);
      isEmailValid = false;
    } else {
      isEmailValid = true;
    }

    if (form.noticePeriod === '') {
      setNoticePeriodWarning(IVerifyField.wrong);
      isNoticeValid = false;
    } else {
      isNoticeValid = true;
    }

    if (form.cvFile === '') {
      setCVFileWarning(IVerifyField.wrong);
      isCVFileValid = false;
    } else {
      isCVFileValid = true;
    }

    if (form.presentationVideo === '') {
      setPresentationVideoWarning(IVerifyField.wrong);
      isPresentationValid = false;
    } else {
      isPresentationValid = true;
    }

    if (
      isNameValid &&
      isSurnameValid &&
      isEmailValid &&
      isNoticeValid &&
      isCVFileValid &&
      isPresentationValid
    ) {
      console.warn('Passed!');
    }
  };

  return (
    <AppModal isVisible={isVisible}>
      <AppTextInput
        value={form.name}
        label="Name"
        inputRef={nameRef}
        status={nameWarning}
        onChangeText={(text) => setForm({ ...form, name: text })}
        inputProps={{
          onBlur: verifyName,
          autoCompleteType: 'name',
          textContentType: 'givenName',
          returnKeyType: 'next',
          onSubmitEditing: () => surnameRef.current.focus()
        }}
      />
      <AppTextInput
        value={form.surname}
        label="Surname"
        inputRef={surnameRef}
        status={surnameWarning}
        onChangeText={(text) => setForm({ ...form, surname: text })}
        inputProps={{
          onBlur: verifySurname,
          autoCompleteType: 'name',
          textContentType: 'familyName',
          returnKeyType: 'next',
          autoCapitalize: 'none',
          onSubmitEditing: () => emailRef.current.focus()
        }}
      />
      <AppTextInput
        value={form.email}
        label="Email"
        inputRef={emailRef}
        status={emailWarning}
        onChangeText={(text) => setForm({ ...form, email: text })}
        inputProps={{
          onBlur: verifyEmail,
          autoCompleteType: 'email',
          textContentType: 'emailAddress',
          keyboardType: 'email-address',
          returnKeyType: 'next',
          autoCapitalize: 'none'
          // onSubmitEditing: () => passwordRef.current.focus()
        }}
      />
      <AppTextInput
        value={form.noticePeriod}
        label="Notice period"
        inputRef={noticeRef}
        status={noticePeriodWarning}
        onChangeText={(text) => setForm({ ...form, noticePeriod: text })}
        inputProps={{
          onBlur: verifyNotice,
          keyboardType: 'number-pad',
          returnKeyType: 'next',
          onSubmitEditing: () => emailRef.current.focus()
        }}
      />
      <AppButton title="Apply" onPress={onApply} />
    </AppModal>
  );
};

export default AppForm;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    margin: 20,
    backgroundColor: Colors.light.background
  }
});
