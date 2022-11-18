import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import Clock from 'react-live-clock';

export default function SearchDiv(props) {

  const ct = require('countries-and-timezones');

  const country = ct.getCountry(props.cntr);
  console.log(country)
  const Tz= country.timezones[0]
  console.log(1,Tz)
  if (Tz==''){
    Tz=country.timezones[0].timezones
    console.log(2,Tz)
  }
  
  return (


    <div className="inputSearch" style={{ width: 400 }}>
      <div>
          <div className='clockst' >

          
            <Clock className='clocknow'  format={'HH:mm:ss'} ticking={true} timezone="Europe/Paris" />
            <div className='tit' >time in your country</div>
          </div>
      </div>
      <div>
      <div className='clocksts' >

          
<Clock className='clocknow'  format={'HH:mm:ss'} ticking={true} timezone={Tz}  />
<div className='tit' >time in {props.hey}</div>
</div>
      </div>
      <div className="barrch">
      <ReactSearchAutocomplete
                onSearch={props.handelchange}
        showNoResults={false}
        autoFocus
      />
      </div>
      
      <button className='btnsrch' onClick={props.handleClick} >submit</button >
    </div>


  )


}