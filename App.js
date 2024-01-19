import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import img from "./assets/favicon.png"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Esta es mi App!!</Text>
      <Image source={img} style={{ width: 100, height: 100, marginTop:50 }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
