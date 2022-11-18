
import './App.css';
import InfosDiv from './component/infosDiv';
import SearchDiv from './component/searchDiv';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cards from './component/cards';

function App() {



  
  const [test,settest] = useState()
  const [city,setcity] = useState('martil')
  const [infos,setinfos] = useState()


  const handelchange = (string)=>{
     settest(string)
  }
  

  const handleClick = ()=>{
    setcity(test)
   


  }



 
      useEffect(() => {
          const getData = async () => {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9fbdfc3fc4287690a3d3cf9992f59663&units=metric`);
            return res.data;
          };
          getData().then((infos) => setinfos(infos));
          console.log(infos)
        }, [city]);

       
try {
  
  const hey = infos.city.country+'/'+infos.city.name
  console.log(hey)

  return (
    <div className="App">
        <SearchDiv hey={hey} cntr={infos.city.country} handelchange={handelchange} handleClick={handleClick} />
        <div className='appinfosdiv' >
        <InfosDiv infos={infos}/>
        <ToastContainer
           position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        theme="light"
        />
        <Cards infos={infos}  />
  
           
        </div>
        
    </div>
  );

} catch (error) {
  
}



}

export default App;
