import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData'

const WeatherLocation = () => (
    <div class="line-square">
       <Location city = {"San Nicolas, N.L"}></Location>
       <WeatherData></WeatherData>
    </div>
);



export default WeatherLocation;