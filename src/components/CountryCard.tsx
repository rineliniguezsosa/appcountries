import { Link } from "react-router-dom"
import { CountryCardProps } from '../types'
import { Card, CardContent, CardMedia } from "@mui/material"

export const CountryCard = ({flag,name,population,region,capital}:CountryCardProps) => {
  return (
        <Card
         sx={{
            width: '75%', 
            height:'auto',
            maxWidth:300,
          }}
            >
            <Link to={`/countries/detail/${name}`} className="no-underline">
                <CardMedia
                    sx={{ height:140 }}
                    image={flag}
                    title="flags"
                    className="w-full"
                />

                <CardContent sx={{paddingX:3,paddingTop:3,width:'100%',height:150}} className="bg-LightModeElements dark:bg-DarkBlueBackground">
                    <h1  className="font-sans font-extrabold mb-1 dark:text-white">
                        {name}
                    </h1>
                    {/* <p><strong className="font-sans font-semibold text-xs">Native Name. </strong>{item.name.nativeName?.nld.common}</p> */}
                    <p className="text-LightModeDarkGrayInput font-sans font-semibold text-xs leading-relaxed">
                        <strong className="font-sans font-extrabold text-black text-xs dark:text-white">Population: </strong>
                        {population}
                    </p>
                    <p className="text-LightModeDarkGrayInput font-sans font-semibold text-xs leading-relaxed">
                        <strong className="font-sans font-extrabold text-black text-xs dark:text-white">Region: </strong>
                        {region}
                    </p>
                    <p className="text-LightModeDarkGrayInput font-sans font-semibold text-xs leading-relaxed">
                        <strong className="font-sans font-extrabold text-black text-xs dark:text-white">Capital: </strong>
                        {capital}
                    </p>
                </CardContent>
            </Link>
        </Card>
  )
}
