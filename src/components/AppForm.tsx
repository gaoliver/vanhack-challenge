import React, { useRef, useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';

import { IVerifyField } from '../utils/types';
import AppButton from './AppButton';
import AppModal from './AppModal';
import AppTextInput from './AppTextInput';
import FilePicker from './FilePicker';
import AppAlert from './AppAlert';

interface IProps {
  isVisible: boolean;
  onDismiss?: () => void;
}

const translate = (props: IProps) => ({
  isVisible: props.isVisible ? props.isVisible : false,
  onDismiss: props.onDismiss ? props.onDismiss : () => {}
});

const AppForm = (props: IProps) => {
  const { isVisible, onDismiss } = translate(props);
  const [showAlert, setShowAlert] = useState(false);
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    noticePeriod: '',
    cvFile: '',
    presentationVideo: ''
  });
  const [pdf, setPdf] = useState('');
  const video = form.presentationVideo
    .replace('file:///', '')
    .split('/')
    .slice(-1)
    .toString();

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

  const pickVideo = async () => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need files permissions to make this work!');
        }
      }
    })();

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      setForm({ ...form, presentationVideo: result.uri });
    }
  };

  const pickDocument = async () => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need files permissions to make this work!');
        } else {
          alert('Ops! Something went wrong. Try again later.');
        }
      }
    })();

    let result = await DocumentPicker.getDocumentAsync();

    if (result.type === 'success') {
      setForm({ ...form, cvFile: result.uri });
      setPdf(result.name);
    } else {
      alert('Ops! Something went wrong. Try again later.');
    }
  };

  const onFinish = () => {
    onDismiss();
    setTimeout(() => {
      setShowAlert(true);
    }, 1000);
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
      onFinish();
    }
  };

  return (
    <>
      <AppModal isVisible={isVisible} onDismiss={onDismiss}>
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
            autoCapitalize: 'none',
            onSubmitEditing: () => noticeRef.current.focus()
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
            returnKeyType: 'next'
          }}
        />

        <FilePicker
          title="Select your C.V.:"
          file={pdf}
          status={cvFileWarning}
          onPress={pickDocument}
        />
        <FilePicker
          title="Upload your presentation video:"
          file={video}
          status={presentationVideoWarning}
          onPress={pickVideo}
        />

        <View style={{ marginTop: 20 }}>
          <AppButton title="Apply" onPress={onApply} />
        </View>
      </AppModal>

      <AppAlert
        isVisible={showAlert}
        message="Application done successfully."
        onDismiss={() => setShowAlert(false)}
      />
    </>
  );
};

export default AppForm;
