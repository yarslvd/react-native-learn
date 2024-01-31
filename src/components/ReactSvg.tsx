import React from "react";
import {View} from "react-native";
import {Circle, Svg, SvgUri} from "react-native-svg";

// @ts-ignore
import Cooking from "../../assets/svg/Cooking.svg";

export const ReactSvg = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {/*<Svg height='200px' width='200px' viewBox='0 0 100 100'>*/}
      {/*  <Circle cx='50' cy='50' r='50' stroke='black' strokeWidth='1' fill='purple'/>*/}
      {/*</Svg>*/}
      {/*<SvgUri*/}
      {/*  width="200px"*/}
      {/*  height="200px"*/}
      {/*  uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"*/}
      {/*/>*/}
      <Cooking width='200px' height='200px' />
    </View>
  )
}
