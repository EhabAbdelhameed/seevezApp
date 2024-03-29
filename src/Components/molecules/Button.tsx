import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';
import { appColors } from '../../theme/appColors';

const Button = ({ text, onPress, style, textStyle }: { text: string; onPress: () => void; style?: ViewStyle; textStyle?: TextStyle; }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, { ...style }]}>
      <Text style={[styles.text, {...textStyle}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.primary,
    paddingVertical: 15,
    borderRadius: 16,
  },
  text: {
    color: appColors.white,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
});
