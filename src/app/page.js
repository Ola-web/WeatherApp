'use client'

import { MdSunny } from "react-icons/md";
import { useState } from "react";

export default function Home() {
   const api = {
          key: '7fa56a3005445a17bba89ce67f709b05',
          baseUrl: 'http://api.openweathermap.org/data/2.5/'
      }


    const [search, setSearch] = useState('')
    const [weather, setWeather] = useState({})

  
    const handleSearch = (e) => {
       fetch(`${api.baseUrl}weather?q=${search}&unitsmetrics&APPID=${api.key}`)
       .then(res => res.json())
       .then(result => (
        setWeather(result),
        console.log(result)
       
       ))
        setSearch('')
    }
  
  return (
    <div className=" h-screen " >
      {/* <WeatherDetials /> */}
      <div className="flex  min-w-full items-center justify-center space-between gap-60 h-120 bg-sky-700">
                  <div >
                      <MdSunny style={{color: 'white', fontSize: '89px'}}/>
                      
                  </div>
                  <div className="text-white">
                     <h1 className="text-9xl">{weather.main?.temp}<sup>o</sup> </h1>
                     <p>Humidity: <span className="px-16">{weather.main?.humidity} %</span></p>
                     <p>Wind Speed: <span className="px-10">{weather.wind?.speed} mph</span></p>
                  </div>
              </div>

               <div className="bg-white flex items-center justify-center gap-120 py-10">
           

            {typeof weather.main !== 'undefined' ? (
 <div>
                <h3>{weather.name}</h3>
                <p>{weather.weather[0].main}</p>
            </div>
            ) : (
              ""
            )}
            <div>
                {/* <CiSearch style={{cursor: 'pointer'}} /> */}
                <input 
                type="search"
                placeholder="search city..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
                <button 
                className="bg-sky-700 px-8 py-2 
                text-white rounded-lg mx-4 
                cursor-pionter"
                onClick={handleSearch}>
                Search
                </button>
               
            </div>
        </div>
      {/* <WeatherInfo style={{cursor: 'pointer'}} /> */}
     
    </div>
  );
}
