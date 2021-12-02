import React, { useState, useEffect } from 'react'
import "./style.css"
import Weathercard from './weathercard';

const Temp = () => {

    const [searchValue, setSearchValue] = useState("Bangalore");
    const [tempInfo, setTempInfo] = useState({});
    const getWeatherInfo = async() => {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=00d545c31475700e3c165f66c67f3d04`;
            
            const res = await fetch(url);
            const data = await res.json();

            //object destructuring of the api call
            
            const {temp, humidity, pressure} = data.main;
            const {main:weathermood} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;

            const myNewWeatherInfo = {
                temp, 
                humidity, 
                pressure, 
                weathermood, 
                name , 
                speed, 
                country, 
                sunset
            };

            setTempInfo(myNewWeatherInfo);

            console.log(temp);
        }

        catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        getWeatherInfo();
    }, [])

    

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type = "search"
                    placeholder = "search..."
                    autoFocus
                    id="search"
                    className="searchTerm"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button className = "searchButton" 
                    type = "button" 
                    onClick={getWeatherInfo}>

                        Search
                    </button>
                    <br/>
                </div>


               
            </div>
                {/* our temp card */}
                <Weathercard tempInfo = {tempInfo}/>
   
        </>
    )
}

export default Temp;
