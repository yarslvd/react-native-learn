import MaskedView from "@react-native-masked-view/masked-view";
import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";

import Config from "react-native-config";

export const TextMask = () => {
  return(
    <MaskedView
      style={{flexDirection: 'row', height: 200}}
      maskElement={
        <View style={styles.mask}>
          <Text style={styles.maskedText}>ITS MASK</Text>
        </View>
      }>
      <Image
        source={{uri: Config.IMAGE_LINK }}
        style={{width: '100%', height: 200}}
      />
    </MaskedView>
  )
}

const styles = StyleSheet.create({
  maskedText: {
    fontSize: 70,
    color: 'black',
    fontWeight: '900',
  },
  mask: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})