import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

type Props = {
  label?: string;
  onPress?: () => void;
  theme?: 'primary' | 'secondary';
  style?: ViewStyle;
  disabled?: boolean;
  children?: React.ReactNode;
};

export default function Button({ label, onPress, theme = 'secondary', style, disabled = false, children }: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        theme === 'primary' ? styles.primary : styles.secondary,
        style,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      {children ?? <Text style={[styles.label, theme === 'primary' ? styles.labelPrimary : styles.labelSecondary]}>{label}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 140,
  },
  primary: {
    backgroundColor: '#0D6EFD',
  },
  secondary: {
    backgroundColor: '#ffffffaa',
  },
  disabled: {
    opacity: 0.6,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  labelPrimary: {
    color: '#fff',
  },
  labelSecondary: {
    color: '#000',
  },
});
