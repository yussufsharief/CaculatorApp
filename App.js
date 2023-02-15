import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Calculator from './components/screens/Calculator';

export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    <SafeAreaView style={styles.container}>
      <Calculator/>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
