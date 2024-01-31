import React, { useEffect, useState } from "react";
import { View, Text, TextInput, ImageBackground, Image, StyleSheet, Button, Pressable, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'

const Weather=()=>{
  const[weather, setWeather] = useState<any | null>(null);
  const[city, setCity] = useState("");
  const[temper, setTemper] = useState<any | null>(null);
  const apiKey = 'd336120b4988f61123b4fbf6bca72aa6';
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const fetchWeather = async() =>{
    try{
      const cityNew = encodeURIComponent(city);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNew}&units=metric&appid=${apiKey}`);
      const data:any = await response.json();
      console.log(data);
      setWeather(data);
      setTemper(data.main.temp);
    }catch(error){
      console.error("Fetching Data");
    }
  };
  const fetchData = ()=>{
    fetchWeather();
  }
  const weatherIcon: { [key:string]:any } = {
    '01d' : require('./assets/images/clear_sky.jpg'),
    '01n' : require('./assets/images/clear_sky.jpg'),
    '02d' : require('./assets/images/clear_sky.jpg'),
    '02n' : require('./assets/images/clear_sky.jpg'),
    '03d' : require('./assets/images/clear_sky.jpg'),
    '03n' : require('./assets/images/clear_sky.jpg'),
    '04d' : require('./assets/images/clear_sky.jpg'),
    '04n' : require('./assets/images/clear_sky.jpg'),
    '50d' : require('./assets/images/mist.jpg'),
    '50n' : require('./assets/images/mist.jpg'),
    '13d' : require('./assets/images/snow.jpg'),
    '13n' : require('./assets/images/snow.jpg'),
    '10d' : require('./assets/images/rain.png'),
    '10n' : require('./assets/images/rain.png'),
    '09d' : require('./assets/images/drizzle.jpg'),
    '11d' : require('./assets/images/thunderstorm.jpg'),
  }
  const iconCode = weather?.weather[0]?.icon;
  const displayIcon = weatherIcon[iconCode];

  
  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
         <Text style={styles.heading}>Get the Current Forecast Data</Text>
         <TextInput 
          placeholder="Search"
          value={city}
          onChangeText={(text)=> setCity(text)}
          style={styles.search}
          />
          <TouchableOpacity onPress={fetchData}>
          <Image source={ require('./assets/images/search.png')} style={styles.searchicon}/>
          </TouchableOpacity>
          
          {/* <Pressable onPress={fetchData} style={styles.btn}>
            <Text style={styles.btn_text}>Show Weather Data</Text>
            </Pressable> */}
          {weather && (<>
          <Image source={displayIcon} style={styles.icon}/>
          <View>
          <Text style={styles.temp}>{temper}°C</Text>
          <Text style={styles.desc}>{capitalizeFirstLetter(weather.weather[0].description)} </Text>
          </View>
          {/* <Text style={styles.temp}>{weather.weather[0].main}</Text> */}
          </>
          )}  
    </View>
    </TouchableWithoutFeedback>
      )}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#2f3640'
    },
    heading:{
      marginTop: 40,
      fontSize: 30,
      color: '#fff',
      fontFamily: 'cursive',
      fontWeight: '800',
      textAlign: 'center'
    },
    search:{
      margin: 40,
      backgroundColor: 'aliceblue',
      padding: 10,
      borderRadius: 10,
      color: 'black',
      borderWidth: 1,
    },
    searchicon:{
      width: 25,
      marginLeft: 279,
      marginTop: -80,
      height: 30
    },
   
    btn:{
      borderRadius: 10,
      backgroundColor: '#1DB952',
      width: 200,
      height: 45,
      marginLeft: 80,
      marginTop: 20,
      paddingLeft: 8,
      paddingTop: 8
    },
    btn_text:{
      color: 'black',
      fontSize: 20,
      fontStyle: 'italic',
      marginLeft: 8,
      
    },
    temp:{
      marginTop: 50,
      color: 'pink',
      fontSize: 30,
      textAlign: 'center',
      fontFamily: 'cursive'
    },
    desc:{
      marginTop: 10,
      color: 'pink',
      fontSize: 30,
      textAlign: 'center',
      fontFamily: 'cursive'
    },
    icon:{
      width: '50%',
      height: '30%',
      alignSelf: 'center',
      marginTop: 44,
      borderRadius: 17
    },
  })
export default Weather;

