/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect,useState } from "react";
import { 
  MenuItem, 
  SelectChangeEvent,
} from "@mui/material";
import { MuiFormControl } from "../components/MuiFormControl";
import { MuiInputLabel } from "../components/MuiInputLabel";
import { MuiCircularProgress } from "../components/MuiCircularProgress";
import { MuiOutlinedInput } from "../components/MuiOutlinedInput";
import { CountriesTypes } from '../types/api.countries'
import { MuiSelect } from "../components/MuiSelect";
import { CountryCard } from '../components/CountryCard';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClearIcon from '@mui/icons-material/Clear';
import { MenuItemList } from '../utils';
import axios from 'axios';

export const Countries = () => {

  const [countries, setCountries] = useState<[] | CountriesTypes[]>([])
  const [countriescopy, setCountriescopy] = useState<[] | CountriesTypes[]>([])
  const [countryname, setCountryname] = useState('');
  const [region, setRegion] = useState<string>('');

  const getCountries = async () =>{
    try {
      const countriesApiUrl:string = 'https://restcountries.com/v3.1/all/';
      const req = await axios.get(countriesApiUrl);
      const resp = await req.data;
      setCountries(resp);
      setCountriescopy(resp)
    } catch (error) {
      console.log("Server error",error);
      setCountries([]);
    }
  }

  
  const filteredCountry = async()=>{
    let filteredCountry = countriescopy;
    
    if(countryname){
      filteredCountry = await filteredCountry.filter(country => country.name.common.toLowerCase().includes(countryname.toLowerCase()))
    }
    
    if (region == 'All') {
      getCountries();
      setRegion('');
    }

    if(region){
      filteredCountry = await filteredCountry.filter(country => country.region.toLowerCase().includes(region.toLowerCase()))
    }
    
    setCountries(filteredCountry)
    
  }

  useEffect(()=>{
    getCountries()
    console.log('me llame una vez');
    
  },[])

  useEffect(() => {
    filteredCountry()
  }, [countryname,region])


  const handleCountryname = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setCountryname(event.target.value);
  }

  const handleRegionChange = (event: SelectChangeEvent<string>) => { 
    setRegion(event.target.value);
  }

  const resetSelectOptions = () =>{
    setRegion('')
  }

  return (
    <div className="w-full px-7 py-7 bg-LightModeBgGray dark:bg-DarkModeBg">
      <form className="flex flex-col gap-7 xl2:flex-row xl2:justify-between">
           {/* inicio FormControl */}
           <MuiFormControl variant="outlined" className='w-full border-2 border-red-500 max-w-[370px] xl2:max-w-[35%]'>
                    <MuiInputLabel
                      htmlFor="search-country"
                      className="font-sans font-light text-LightModeBgGray dark:text-LightModeElements"
                      >
                      Search for a country...
                    </MuiInputLabel>
                    <MuiOutlinedInput
                        id="search-country"
                        fullWidth
                        type="text"
                        label="Search for a country..."
                        className='bg-LightModeElements shadow-md dark:bg-DarkBlueBackground text-LightModeElements'
                        onChange={handleCountryname}
                        sx={{
                          '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none', // Elimina el borde
                          },
                        }}
                      />
           </MuiFormControl>
           {/* fin FormControl */}
                        
           {/* inicio FormControl*/}
           <MuiFormControl variant="outlined" className="w-3/5 max-w-[240px] xl2:w-1/5">
                    <MuiInputLabel  
                      id="select-region"
                      htmlFor="region"
                      >
                        <span className="font-sans font-semibold text-black text-sm dark:text-LightModeElements">Filter by Region</span>
                    </MuiInputLabel>

                    <MuiSelect
                      labelId="select-region"
                      id="region"
                      fullWidth
                      className='text-black bg-LightModeElements shadow-md dark:bg-DarkBlueBackground text-white'
                      IconComponent={(props) => region ? <ClearIcon className="text-black mr-2 text-xs dark:text-white" onClick={resetSelectOptions}/> : <KeyboardArrowDownIcon {...props} className='text-black mr-2 text-xs dark:text-white' />}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            '& .MuiList-root': {
                              padding: 0, // Elimina el padding de la lista
                            },
                          },
                        },
                      }}
                      label="Filter by Region"
                      sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: 'none', // Elimina el borde
                        }
                      }}
                      value={region}
                      onChange={handleRegionChange}
                      >
                      {MenuItemList.map(item => (
                      <MenuItem 
                       key={item.id} 
                       className='dark:bg-DarkBlueBackground' 
                       value={item.value}
                       >
                        <span className='font-sans font-semibold text-sm dark:text-white'>{item.title}</span>
                      </MenuItem>
                      ))}
                    </MuiSelect>
           </MuiFormControl>
           {/* fin FormControl*/}

      </form>

      {/* inicio card countries */}
      <div 
        className="w-full bg-LightModeBgGray gap-y-10 mt-10 flex flex-col items-center 
        dark:bg-DarkModeBg xl2:flex-row xl2:justify-between xl2:flex-wrap xl2:gap-y-20"
      >
          {
            countries && countries.length == 0 ? 
            (
              <MuiCircularProgress color="primary"/>
            ) 
            : 
            (
              countries.map((item,index)=> (
              <CountryCard
                key={index}
                flag={item.flags.svg}
                name={item.name.common} 
                population={item.population} 
                region={item.region}
                capital={item.capital}
              />
              ))
            )
          }
      </div>
      {/* fin card countries */}

    </div>
  )
}
