import React from "react";
import './stylecard.css';
import { HashLoader } from "react-spinners";

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
export default function Cards(props) {


    try {

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

        const list = props.infos.list.filter(item=> (new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(item.dt*1000))=="10:00:00 AM")
        console.log(list)
        return (

            <div className="cont" >

                {list.map((item, index) => (
                        
                    <div className="card_auther" key={index} >
                        <div className="card_header" >
                            <div>
                                <p className="degs" >{Math.round(item.main.temp)}°</p>
                            </div>
                            <div className="dis" >
                                <p>{item.weather[0].description}</p>
                                <p className="ct" >{props.infos.city.name}</p>
                            </div>
                        </div>

                        <div className="card_body" >
                    
                            <img className="card_img" src={objicon.filter(s=>s.name==item.weather[0].icon)[0].valuess} alt="" />
                            <p>{['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date(item.dt_txt).getDay()]}</p>
                            <p>{new Date(item.dt*1000).toDateString()}</p>
                            <p>{new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(item.dt*1000)}</p>
                        </div>
                    </div>









                ))}




            </div>



        )




    } catch (error) {





        return (
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