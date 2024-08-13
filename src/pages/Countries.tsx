/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect,useState } from "react";
import { 
  IconButton, InputAdornment, SelectChangeEvent
} from "@mui/material";
import { MuiFormControl } from "../components/MuiFormControl";
import { MuiInputLabel } from "../components/MuiInputLabel";
import { MuiCircularProgress } from "../components/MuiCircularProgress";
import { MuiOutlinedInput } from "../components/MuiOutlinedInput";
import { CountriesTypes } from '../types/api.countries'
import { MuiSelect } from "../components/MuiSelect";
import { MuiMenuItem } from '../components/MuiMenuItem';
import { CountryCard } from '../components/CountryCard';
import SearchIcon from '@mui/icons-material/Search';
import { MenuItemList } from '../utils';
import axios from 'axios';

export const Countries = () => {

  const [countries, setCountries] = useState<[] | CountriesTypes[]>([])
  const [countriescopy, setCountriescopy] = useState<[] | CountriesTypes[]>([])
  const [countryname, setCountryname] = useState('');
  const [region, setRegion] = useState('');

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

    if(region){
      filteredCountry = await filteredCountry.filter(country => country.region.toLowerCase().includes(region.toLowerCase()))
    }
    
    setCountries(filteredCountry)
    
  }

  useEffect(()=>{
    getCountries()
  },[])

  useEffect(() => {
    filteredCountry()
  }, [countryname,region])


  const handleCountryname = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setCountryname(event.target.value);
  }

  const handleRegionChange = (event:SelectChangeEvent<string>) => {
    setRegion(event.target.value);
  }

  return (
    <div className="w-full px-7 py-7 bg-LightModeBgGray dark:bg-DarkModeBg">
      <form className="flex flex-col gap-7 border-2 border-red-500 xl2:flex-row justify-between">
           {/* inicio FormControl */}
           <MuiFormControl variant="outlined" className='w-full xl2:w-1/4'>
                    <MuiInputLabel 
                    className="text-LightModeDarkGrayInput" 
                    id="country-name" 
                    htmlFor="outlined-adornment-search"
                    >
                      Search for a country...
                    </MuiInputLabel>

                    <MuiOutlinedInput
                        id="outlined-adornment-search"
                        fullWidth={true}
                        type="text"
                        startAdornment={
                          <InputAdornment position="start">
                            <IconButton edge="start">
                                    <SearchIcon className='dark:text-white'/>
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Search for a country..."
                        className='bg-LightModeElements shadow-md dark:bg-DarkBlueBackground'
                        onChange={handleCountryname}
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
                      fullWidth={true}
                      className='dark:bg-DarkBlueBackground text-white'
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
                      value={region}
                      onChange={handleRegionChange}
                    >
                      {
                        MenuItemList.map(item => (
                          <MuiMenuItem 
                            key={item.id} 
                            value={item.value}
                            className='bg-LightModeElements border-2 border-red-400 dark:bg-DarkModeBg text-white'
                          >
                          <span className='text-DarkBlueBackground dark:text-LightModeElements'>{item.title}</span>
                          </MuiMenuItem>
                        ))
                      }
                    </MuiSelect>
           </MuiFormControl>
           {/* fin FormControl*/}

      </form>

      {/* inicio card countries */}
      <div className="w-full border-2 border-yellow-600 mt-10 flex flex-col items-center gap-10 xl2:flex-row flex-wrap items-start justify-between">
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
