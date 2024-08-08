/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect,useState } from "react";
import { 
  IconButton, InputAdornment,MenuItem, SelectChangeEvent
} from "@mui/material";
import { MuiFormControl } from "../components/MuiFormControl";
import { MuiInputLabel } from "../components/MuiInputLabel";
import { MuiCircularProgress } from "../components/MuiCircularProgress";
import { MuiOutlinedInput } from "../components/MuiOutlinedInput";
import { CountriesTypes } from '../types/api.countries'
import { MuiSelect } from "../components/MuiSelect";
import SearchIcon from '@mui/icons-material/Search';
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
      filteredCountry = filteredCountry.filter(country => country.name.common.includes(countryname.toLowerCase()))
    }
    console.log("filter country",filteredCountry);
    
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
    <div className="w-full h-screen border-2 border-red-900 px-7 py-7">
      <form className="flex flex-col gap-7 border-2 border-red-500">
           {/* inicio FormControl */}
           <MuiFormControl variant="outlined" fullWidth={true}>
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
                                    <SearchIcon/>
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Search for a country..."
                        onChange={handleCountryname}
                      />
      
           </MuiFormControl>
           {/* fin FormControl */}
                        
           {/* inicio FormControl*/}
           <MuiFormControl variant="outlined" className="w-3/5">
                    <MuiInputLabel 
                      className="font-bold font-sans-extrabold" 
                      id="select-region"
                      htmlFor="region"
                      >
                        Filter by Region
                    </MuiInputLabel>

                    <MuiSelect
                      labelId="select-region"
                      id="region"
                      fullWidth={true}
                      label="Filter by Region"
                      onChange={handleRegionChange}
                    >
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value="Africa">Africa</MenuItem>
                      <MenuItem value="Americas">America</MenuItem>
                      <MenuItem value="Asia">Asia</MenuItem>
                      <MenuItem value="Europe">Europe</MenuItem>
                      <MenuItem value="Oceania">Oceania</MenuItem>
                    </MuiSelect>
           </MuiFormControl>
           {/* fin FormControl*/}

      </form>

      {/* inicio card countries */}
      <div className="w-full border-2 border-yellow-600 mt-3 flex flex-col items-center">
          {
            countries && countries.length == 0 ? <MuiCircularProgress color="primary"/> : <h1>Allcomponentescards</h1>
          }
      </div>
      {/* fin card countries */}

    </div>
  )
}
