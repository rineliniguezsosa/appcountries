/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate,useParams } from "react-router-dom";
import { MuiButton } from "../components/MuiButton"
import { MuiCircularProgress } from "../components/MuiCircularProgress";
import WestIcon from '@mui/icons-material/West';
import { useEffect,useState } from "react";
import axios from 'axios';

export const CountriesDetail = () => {
  const navigate = useNavigate();
  const { name } = useParams<{name:string}>();
  const [countries, setCountries] = useState([]);
  console.log(countries);
  
  console.log("name",name);
  
  console.log(navigate);

  const getCountryByName = async()=>{
    try {
      const countriesApiUrl:string = `https://restcountries.com/v3.1/name/${name}`;
      const req = await axios.get(countriesApiUrl);
      const resp = await req.data;
      setCountries(resp);
    } catch (error) {
      console.log(error);
      setCountries([])
    }
  }

  useEffect(()=>{
    if(!name || name.trim().length === 0){
       returnCountriespage()
    }else{
      getCountryByName() 
    } 
  },[name])

  const returnCountriespage = () =>{
    navigate('/')
  }
  
  return (
    <div className="px-7 py-10 w-full h-screen border-2 border-red-300 bg-LightModeBgGray ">

      {/* inicio div */}
      <div className="border-2 border-blue-400">
        <MuiButton
          onClick={returnCountriespage}
          variant="outlined"
          title="Back"
          className="font-sans font-semibold text-xs text-black"
          style={{textTransform:'none',boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",border:'none'}}
          icon={<WestIcon className="text-black"/>}
          />
      </div>
      {/* fin div */}

      {/* inicio article */}
      <div className="w-full border-2 border-green-300 mt-20">
        <article className="w-full border-2 border-green-300">
        </article>
      </div>
      {/* fin article */}
    </div>
  )
}
