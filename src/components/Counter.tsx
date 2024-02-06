import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {observer} from 'mobx-react-lite';

import {useCounterStore} from '../store';

export const Counter = observer(() => {
  const {count, increment, decrement} = useCounterStore();

  return (
    <View style={{paddingVertical: 30, paddingHorizontal: 10}}>
      <Text style={styles.text}>{`Clicked ${count} times!`}</Text>
      <View style={{flexDirection: 'row', gap: 10}}>
        <TouchableOpacity
          style={styles.button}
          onPress={increment}
          activeOpacity={0.8}>
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={decrement}
          activeOpacity={0.8}>
          <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'black',
    flex: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
