import React from "react";
import './style.css'


import clear_day from '../icons/production/fill/svg/clear-day.svg'
import clear_night from '../icons/production/fill/svg/clear-night.svg'
import partly_cloudy_night from '../icons/production/fill/svg/partly-cloudy-night.svg'
import partly_cloudy_day from '../icons/production/fill/svg/partly-cloudy-day.svg'
import cloudy from '../icons/production/fill/svg/cloudy.svg'
import overcast from '../icons/production/fill/svg/overcast.svg'
import overcast_rain from '../icons/production/fill/svg/overcast-rain.svg'
import overcast_day_rain from '../icons/production/fill/svg/overcast-day-rain.svg'
import overcast_night_rain from '../icons/production/fill/svg/overcast-night-rain.svg'
import thunderstorms_overcast_rain from '../icons/production/fill/svg/thunderstorms-overcast-rain.svg'
import overcast_snow from '../icons/production/fill/svg/overcast-snow.svg'
import mist from '../icons/production/fill/svg/mist.svg'
import wind from '../icons/production/fill/svg/wind.svg'
import barometer from '../icons/production/fill/svg/barometer.svg'
import tide_high from '../icons/production/fill/svg/tide-high.svg'
import raindrop_measure from '../icons/production/fill/svg/raindrop-measure.svg'
import thermometer_celsius from '../icons/production/fill/svg/thermometer-celsius.svg'



import { WiBarometer, WiFlood, WiHurricaneWarning, WiRaindrops, WiStrongWind, WiThermometerExterior } from "weather-icons-react";

import { HashLoader } from "react-spinners";

export default function InfosDiv(props){

    

    


    try {

        //this for current day weather

                const notUndefined = anyValue => typeof anyValue !== 'undefined'    
                const currr = props.infos.list.map(item=>{
                        const dt= new Date(item.dt_txt)
                        const dtn= new Date(Date.now())
                        const diff = (dt.getTime()-dtn.getTime())/1000
                        const  sss = diff/(60*60)
                    const res= Math.abs(Math.round(sss))


                    if(res<=3 && res>=1){
                        return (item)
                    }
                }
                    ).filter(notUndefined)[0]
                const curr = props.infos.list[0]
        //icons
     
 
            const objicon=[
                                {name:'01d',valuess:clear_day},
                                {name:'01n',valuess:clear_night},
                                {name:'02d',valuess:partly_cloudy_day},
                                {name:'02n',valuess:partly_cloudy_night},
                                {name:'03d',valuess:cloudy},
                                {name:'03n',valuess:cloudy},
                                {name:'04n',valuess:overcast},
                                {name:'04d',valuess:overcast},
                                {name:'09d',valuess:overcast_rain},
                                {name:'09n',valuess:overcast_rain},
                                {name:'10d',valuess:overcast_day_rain},
                                {name:'10n',valuess:overcast_night_rain},
                                {name:'11d',valuess:thunderstorms_overcast_rain},
                                {name:'11n',valuess:thunderstorms_overcast_rain},
                                {name:'12d',valuess:mist},
                                {name:'12n',valuess:mist},
                                {name:'13d',valuess:overcast_snow},
                                {name:'13n',valuess:overcast_snow},
                                {name:'14d',valuess:mist},
                                {name:'14n',valuess:mist},
                                {name:'15n',valuess:mist},
                                {name:'15n',valuess:mist},
                                {name:'50n',valuess:mist},
                                {name:'50n',valuess:mist},
                                
        
                            ]
                           


        return (
       
            <div className="Cart_weather" >
                <div className="divsinfosweather" >
                        <div className="minidiv" >
                            <img src={wind} className="testss" alt="" />
                            <span className="mininumber" >{curr.wind.speed} km/h</span>
                            <p className="minititle" >Speed Wind</p>
                        </div>

                        <div className="minidiv" >
                        <img src={barometer} className="testss" alt="" />
                            <span className="mininumber" >{curr.main.pressure} hpa</span>
                            <p className="minititle" >pressure</p>
                        </div>

                        <div className="minidiv" >
                        <img src={tide_high} className="testss" alt="" />
                            <span className="mininumber" >{curr.main.sea_level} mm</span>
                            <p className="minititle" >sea ​​level</p>
                        </div>

                        <div className="minidiv" >
                        <img src={thermometer_celsius} className="testss" alt="" />

                            <span className="mininumber" >15 C°</span>
                            <p className="minititle" >temperature</p>
                        </div>

                        <div className="minidiv" >
                        <img src={raindrop_measure} className="testss" alt="" />

                            <span className="mininumber" >{curr.pop} mm</span>
                            <p className="minititle" >precipitation</p>
                        </div>

                        <div className="minidiv" >
                            <WiHurricaneWarning size={50} />
                            <span className="mininumber" >Safe</span>
                            <p className="minititle" >dangers</p>
                            
                        </div>  
                </div>
                <div className="divborders" >
                    <div className="davins" >
                        <div>
                            <h1 className="titleofcity" >{props.infos.city.name}, {props.infos.city.country}</h1>
                            <img className="img" src={objicon.filter(item=>item.name==curr.weather[0].icon)[0].valuess} alt="" />
                        </div>

                        <div>
                            <h1 className="deg" >{curr.main.temp}°</h1>
                            <h2 className="minititel" >{curr.weather[0].description}</h2>
                        </div>
                        
                        <div className="minmax" >
                            <p>Max : {curr.main.temp_max}°</p>
                            <p>Min : {curr.main.temp_min}°</p>
                        </div>

                    </div>
                    
                </div>


            </div>


      )

        
    } catch (error) {

        return(
            <div className="loading" >
                 <HashLoader
                    color="#36d7b7"
                    cssOverride={{}}
                    loading
                    speedMultiplier={1.5}
                 />
                 <h3>Loading...</h3>

            </div>
           
                    

        )
        
    }
    
    
      


}