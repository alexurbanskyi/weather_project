import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import City from "./components/City/City";
import Forecast from "./components/Forecast/Forecast";
import Graph from "./components/Graph/Graph";
import Main from "./components/Main/Main";
import Weather from "./components/Weather/Weather";
import FiveDaysData from './components/FiveDaysData/FiveDaysData'




function App() {
   let [cityId, SetCityId] = useState(689558);
   let [weatherData, SetWeatherData] = useState({});
   let [fiveDaysData, SetFiveDaysData] = useState({});

  FiveDaysData(cityId, SetFiveDaysData);
   
 
    return (
    <div className="App">

      <Routes>
          <Route path="/" element={<Main/>}>  
                    
            <Route index element={<City weatherData={weatherData} SetWeatherData={SetWeatherData} cityId={cityId} SetCityId={SetCityId}/>}/>
            <Route path='/weather'  element={<Weather weatherData={weatherData} SetWeatherData={SetWeatherData} cityId={cityId} SetCityId={SetCityId}/>}/>
            <Route path='/forecast'  element={<Forecast fiveDaysData={fiveDaysData}/>}/>
            <Route path='/graph'  element={<Graph fiveDaysData={fiveDaysData}/>}/>

          
          </Route>
      </Routes>
 
    </div>
  );
}

export default App;


                                                                                      