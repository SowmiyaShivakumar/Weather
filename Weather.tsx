import React, { useEffect, useState } from "react";
import { View, Text, TextInput, ImageBackground, Image, StyleSheet, Button } from 'react-native'

const Weather=()=>{
  const[weather, setWeather] = useState(null);
  const [error,setError] = useState(null);
  const[city, setCity] = useState(" ");
  const apiKey = 'd336120b4988f61123b4fbf6bca72aa6';
  const fetchWeather = async() =>{
    try{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      const data = await response.json();

      console.log(data);
      setWeather(data);
    }catch(error){
      console.error("Fetching Data");
    }
  };
  // const fetchData = ()=>{
  //   fetchWeather();
  // }
  // if(!weather){
  //   <Text>Error</Text>
  // }
  // useEffect(()=>{fetchWeather()},[]);
  return(

    <View style={styles.container}>
        {/* {
          error?(
          <Text>{error}</Text>):(weather && (
            <>
              <Text>{`Temperature: ${weather.main['temp']} C`}</Text>
            </>
          ))
        } */}
        <ImageBackground source={ require('./assets/images/bg2.jpg') } style={styles.bgimg}>
          <TextInput 
          placeholder="Search"
          value={city}
          onChangeText={(text)=> setCity(text)}
          style={styles.search}
          />
          <Image source={ require('./assets/images/search.png')} style={styles.searchicon}/>
          <Button title="Get Current Weather" onPress={fetchWeather}></Button>
          {/* <Text>{`Temperature: ${weather.main['temp']} C`}</Text>r */}
          {/* <Text>{"Text Description: ${weather.weather[0].description}"}</Text> */}
          {/* <Icon name="tag" size={70} style={{ margin: 50 }}/> */}
          {/* <Weather /> */}
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1
    },
    bgimg:{
      width: '100%',
      height: '100%'
    },
    search:{
      margin: 40,
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10,
      color: '#000',
      borderWidth: 1
    },
    searchicon:{
      width: 25,
      marginLeft: 279,
      marginTop: -80,
      height: 30
    }
  })
export default Weather;