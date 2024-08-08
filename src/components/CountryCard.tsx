import { Link } from "react-router-dom"
import { CountryCardProps } from '../types'

export const CountryCard = ({id,flag,name,population,region,capital}:CountryCardProps) => {
  return (
    <Link to={`/countries/dertail/${name}`}>CountryCard</Link>
  )
}
