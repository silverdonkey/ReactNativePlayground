
import React from 'react';
import {PropTypes} from 'prop-types';
import {Text, View} from 'react-native';

import Styles from './styles';

export default function Box({children}): JSX.Element {
  return (
    <View style={Styles.box}>
      <Text style={Styles.boxText}>{children}</Text>
    </View>
  );
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
};
