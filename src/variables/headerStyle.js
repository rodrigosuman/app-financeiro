import {getStatusBarHeight} from 'react-native-status-bar-height';

export const headerStyle = {
  backgroundColor: '#1abc9c',
  paddingTop: 30 + getStatusBarHeight(true),
  height: 90,
};
