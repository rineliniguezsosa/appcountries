/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate,useParams } from "react-router-dom";
import { MuiButton } from "../components/MuiButton"
import { MuiCircularProgress } from "../components/MuiCircularProgress";
import { MuiLoadingButton } from "../components/MuiLoadingButton";
import { CountriesTypes } from '../types/api.countries';
import WestIcon from '@mui/icons-material/West';
import { useEffect,useState } from "react";
import axios from 'axios';

export const CountriesDetail = () => {
  const navigate = useNavigate();
  const { name } = useParams<{name:string}>();
  const [countries, setCountries] = useState<[] | CountriesTypes[]>([]);
  const [countriescode, setCountriescode] = useState<[] | CountriesTypes[]>([])
  console.log("countries by code",countriescode);

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

  const getCountriesByCode = async(code: string[])=>{
    try {
      const countriesApiUrl = `https://restcountries.com/v3.1/alpha?codes=${code.join(',')}`;
      const req = await axios.get(countriesApiUrl);
      const resp = await req.data;
      setCountriescode(resp)
    } catch (error) {
      console.log("Error:",error);
      setCountriescode([])
    } 
  }

  useEffect(()=>{
    if(!name || name.trim().length === 0){
       returnCountriespage()
    }else{
      getCountryByName() 
    } 
  },[name])

  useEffect(() => {
    if(countries.length > 0 && countries[0].borders){
      getCountriesByCode(countries[0].borders);
    }
  }, [countries])
  

  const returnCountriespage = () =>{
    navigate('/')
  }

  const returnCountryDetail = (item:CountriesTypes,index:number):JSX.Element =>{
    let nativeNameKey;
    let nativeName:string = '';
    if(item.name.nativeName){
      nativeNameKey = Object.keys(item.name.nativeName)[0];      
      nativeName = item.name.nativeName[nativeNameKey]?.common;      
    }
    
    let currencieKey;
    let currencies:string = '';
    if(item.currencies){
      currencieKey = Object.keys(item.currencies)[0];
      currencies = item.currencies[currencieKey as keyof typeof item.currencies]?.name || '';
    }
    
    let languajesKey:string[];
    const languajes:string[] = [];
    if(item.languages){
      languajesKey = Object.keys(item.languages)
      for (const element of languajesKey) {
        languajes.push(item.languages[element]);
      }
    }
      
    return (
      <article key={index} className="w-full flex flex-col border-2 border-red-400 xl2:flex-row">
        <img  className="w-full xl2:h-1/4 xl2:w-2/5" src={item.flags.svg} alt="flag" />

        <div className="w-full py-10 border-2 border-green-500 xl2:w-3/4 xl2:pl-20">
            <h1 className="font-sans font-extrabold text-lg pb-5 border-2 border-blue-400 dark:text-LightModeElements">{item.name.common}</h1>

            <div className="w-full xl2:flex flex-row">
              <div className="border-2 border-red-400 xl2:w-3/5">
                <p className="font-sans font-semibold text-sm text-LightModeTextDarkBlue pb-2 dark:text-LightModeElements"><strong className="font-sans font-extrabold text-sm">Population: </strong>{item.population}</p>
                <p className="font-sans font-semibold text-sm text-LightModeTextDarkBlue pb-2 dark:text-LightModeElements"><strong className="font-sans font-extrabold text-sm">Region: </strong>{item.region}</p>
                <p className="font-sans font-semibold text-sm text-LightModeTextDarkBlue pb-2 dark:text-LightModeElements"><strong className="font-sans font-extrabold text-sm">Sub Region: </strong>{item.subregion}</p>
                <p className="font-sans font-semibold text-sm text-LightModeTextDarkBlue pb-7 dark:text-LightModeElements"><strong className="font-sans font-extrabold text-sm">Capital: </strong>{item.capital}</p>
                <p className="font-sans font-semibold text-sm text-LightModeTextDarkBlue pb-2 xl2:hidden dark:text-LightModeElements"><strong className="font-sans font-extrabold text-sm">Native Name: </strong>{nativeName ? nativeName : ''}</p>
              </div>
              <div className="border-2 border-blue-500 xl2:w-2/5">
                <p className="font-sans font-semibold text-sm text-LightModeTextDarkBlue pb-2 dark:text-LightModeElements"><strong className="font-sans font-extrabold text-sm">Top Level Domain: </strong>{item.tld}</p>
                <p className="font-sans font-semibold text-sm text-LightModeTextDarkBlue pb-2 dark:text-LightModeElements"><strong className="font-sans font-extrabold text-sm">Currencies: </strong>{currencies}</p>
                <p className="font-sans font-semibold text-sm text-LightModeTextDarkBlue pb-7 dark:text-LightModeElements"><strong className="font-sans font-extrabold text-sm">Languages: </strong>{languajes.join(' ')}</p>
              </div>
            </div>

            <div className="w-full border-2 border-blue-500 xl2:mt-10 xl2:flex flex-row">
              <div className="border-2 text-left border-red-500 xl2:w-1/3">
                <p className="font-sans font-semibold text-sm text-LightModeTextDarkBlue pb-2 dark:text-LightModeElements"><strong className="font-sans font-extrabold text-sm">Border Countries: </strong></p>
              </div>
              <div className="border-2 border-blue-700 flex flex-row flex-wrap gap-3 mt-5 xl2:mt-0">
                {
                    countriescode.map((item,index)=> (
                      <MuiLoadingButton  loading={!item} className="dark:bg-DarkBlueBackground" style={{textTransform:'none',boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",border:'none',backgroundColor:'LightModeBgGray',width: '6.5rem', height: '2.2rem'}}  key={index} variant="text">
                          <span className="font-sans font-semibold text-xs text-black dark:text-LightModeElements">{item.name.common}</span>
                      </MuiLoadingButton>
                    ))
                }
              </div>
            </div>
            {/* todo esto lo mevere en un component */}
        </div>
      </article>
    )
  
  }

  return (
    <div className="px-7 py-10 w-full  bg-LightModeBgGray dark:bg-DarkModeBg">

      {/* inicio div */}
      <div className="">
        <MuiButton
          onClick={returnCountriespage}
          variant="outlined"
          className="bg-LightModeElements dark:bg-DarkBlueBackground"
          style={{textTransform:'none',boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",border:'none',backgroundColor:'LightModeBgGray'}}
          icon={<WestIcon className="text-black dark:text-LightModeElements"/>}
          >
          <span className="font-sans font-semibold text-xs text-black dark:text-LightModeElements">Back</span>
        </MuiButton>
      </div>
      {/* fin div */}

      {/* inicio article */}
      <div className="w-full h-screen  mt-20">
        {
          countries && countries.length == 0 ? 
          (
            <MuiCircularProgress color="primary"/>
          )
          :
          (
            countries.map(returnCountryDetail)
          )
        }
      </div>
      {/* fin article */}   
    </div>
  )
}
