import { Content } from 'native-base';
import React from 'react';
import { RefreshControl, StyleProp, StyleSheet, ViewStyle } from 'react-native';

import { padding } from '../constants/Settings';

interface IProps {
  loadingIndicator?: boolean;
  loadAction?: () => void;
  style?: StyleProp<ViewStyle>;
  noScrolling?: boolean;
}

const translate = (props: IProps) => ({
  loadingIndicator: props.loadingIndicator ? props.loadingIndicator : false,
  loadAction: props.loadAction ? props.loadAction : () => {},
  style: props.style ? props.style : {},
  noScrolling: props.noScrolling ? false : true
});

const AppContent: React.FC<IProps> = (props) => {
  const { loadingIndicator, loadAction, style, noScrolling } = translate(props);

  return (
    <Content
      style={[styles.container, style]}
      refreshControl={
        <RefreshControl refreshing={loadingIndicator} onRefresh={loadAction} />
      }
      scrollEnabled={noScrolling}
    >
      {props.children}
    </Content>
  );
};

export default AppContent;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: padding,
    backgroundColor: 'transparent'
  }
});
