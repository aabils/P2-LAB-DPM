import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>Hallo, ini tugas 2 abilla</Text>
      <View style={styles.row}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Latar belakang abu terang
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    marginBottom: 20, // Beri jarak antara teks dan kotak
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%', // Mengontrol jarak antar kotak
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'black', // Warna hitam
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#2f4f4f', // Warna abu tua (Dark Slate Gray)
  },
});
