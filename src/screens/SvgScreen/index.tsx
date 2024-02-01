import {SafeAreaView, Text, Image, View, StyleSheet} from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";

import {ReactSvg} from "../../components/ReactSvg.tsx";
export const SvgScreen = () => {
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.quicksandBold}>Hello World!</Text>
      <ReactSvg/>
      <MaskedView
        style={{flexDirection: 'row', height: '100%' }}
        maskElement={
          <View style={styles.mask}>
            <Text style={styles.maskedText}>ITS MASK</Text>
          </View>
        }>
        {/*<View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />*/}
        <Image
          source={{uri: 'https://images.unsplash.com/photo-1558244661-d248897f7bc4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
          style={{width: '100%', height: '100%'}}
        />
      </MaskedView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  quicksandBold: {
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',
    fontSize: 50
  },
  maskedText: {
    fontSize: 70,
    color: 'black',
    fontWeight: '900',
  },
  mask: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})