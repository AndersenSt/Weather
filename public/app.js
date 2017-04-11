import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'paper': {
    'width': [{ 'unit': 'px', 'value': 1000 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'header': {
    'height': [{ 'unit': 'px', 'value': 70 }],
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  'header-input': {
    'height': [{ 'unit': 'px', 'value': 32 }],
    'width': [{ 'unit': 'px', 'value': 400 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#00BCD4' }],
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  }
});
