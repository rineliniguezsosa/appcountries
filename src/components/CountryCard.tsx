import { Link } from "react-router-dom"
import { CountryCardProps } from '../types'
import { Card, CardContent } from "@mui/material"

export const CountryCard = ({id,flag,name,population,region,capital}:CountryCardProps) => {
  return (
    <Link to={`/countries/dertail/${name}`}>CountryCard</Link>
  )
}
