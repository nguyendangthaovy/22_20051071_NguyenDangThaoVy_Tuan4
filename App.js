import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient 
    colors={["#CFEBFC","#CFEBFC", "#CFEBFC", "#CFEBFC", "#27A4F2"]}
    style={styles.container}>
      <View style={{
          width: 140,
          height: 140,
          borderWidth: 15,
          borderRadius: 100,
          marginTop: 69,
          left: 125,
        }}>
      </View>
      <View style={styles.view1}>
        <Text style={styles.text1}>GROW</Text>
        <Text style={styles.text1}>YOUR BUSINESS</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text2}>
          We will help you to grow your business using
        </Text>
        <Text style={styles.text2}>online server</Text>
      </View>
      <View style={styles.view3}>
        <View style={styles.view4}>
          <Text style={styles.text3}>
            LOGIN
          </Text>
        </View>
        <View style={styles.view4}>
        <Text style={styles.text3}>
            SIGN UP
          </Text>
        </View>
      </View>
      <View style={styles.view5}>
        <Text style={styles.text4}>HOW WE WORK?</Text>
      </View>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    flex: 1,
  },
  view2: {
    flex: 1,
  },
  view3: {
    flex: 1,
    height: 48,
    top: 30,
    width: '100%',
    flexDirection: "row",
    justifyContent:"space-around"
  },
  view4: {
    backgroundColor: 'yellow',
    height: 48,
    width: 120,
    borderRadius: 10,
    backgroundColor: '#E3C000',
  },
  view5: {
    flex: 1,
  },
  text1: {
    position: 'relative',
    top: 50,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  text2: {
    position: 'relative',
    top: 50,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  text3:{
    textAlign: "center",
    position: "relative",
    top: 6,
    fontWeight: "bold",
    fontSize: 25
  },
  text4: {
    position: 'relative',
    bottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: "Arial, Helvetica, sans-serif",
  },
});
