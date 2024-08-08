import { Link } from "react-router-dom"
import { CountryCardProps } from '../types'
import { Card, CardContent, CardMedia } from "@mui/material"

export const CountryCard = ({flag,name,population,region,capital}:CountryCardProps) => {
  return (
        <Card className="border-2 border-blue-600 w-3/4">
            <Link to={`/countries/detail/${name}`} className="no-underline">
                <CardMedia
                    sx={{ height: 140 }}
                    image={flag}
                    title="flags"
                />

                <CardContent className="dark:bg-DarkBlueBackground">
                    <h1 className="font-sans-extrabold font-bold mb-1 dark:text-white">
                        {name}
                    </h1>
                    <p className="font-sans-extrabold font-bold text-[12px] dark:text-white">
                        Population:
                        <span className="text-LightModeDarkGrayInput">{population}</span>
                    </p>
                    <p className="font-sans-extrabold font-bold text-[12px] dark:text-white">
                        Region:
                        <span className="text-LightModeDarkGrayInput">{region}</span>
                    </p>
                    <p className="font-sans-extrabold font-bold text-[12px] dark:text-white">
                        Capital:
                        <span className="text-LightModeDarkGrayInput">{capital}</span>
                    </p>
                </CardContent>
            </Link>
        </Card>
  )
}
