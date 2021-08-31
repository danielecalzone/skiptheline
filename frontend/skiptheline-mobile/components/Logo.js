import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('../assets/logo-app.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    marginBottom: 12,
  },
});

export default memo(Logo);