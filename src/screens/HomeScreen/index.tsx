import React from "react";
import {Button, Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {ReactSvg} from "../../components/ReactSvg.tsx";
import MaskedView from "@react-native-masked-view/masked-view";

export const HomeScreen = ({navigation}) => {
  return(
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient colors={['#8360c3', '#2ebf91']} style={styles.gradient} useAngle={true} angle={45}>
        <Button
          title='Go to SVG'
          onPress={() => {
            navigation.navigate('Svg')
          }}
        />
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  gradient: {
    width: '100%',
    flex: 1
  },
})