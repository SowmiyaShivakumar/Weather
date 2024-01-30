import React from "react";
import { StyleSheet, SafeAreaView } from 'react-native';
import Weather from "./Weather";
// import Weather from './assets/Weather';
// import 'bg1.jpg' from 'assets/images';
// import  Icon  from 'react-native-vector-icons/FontAwesome';
const App =()=>{
  return(
    <SafeAreaView style={styles.container}>
      <Weather />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})
export default App;