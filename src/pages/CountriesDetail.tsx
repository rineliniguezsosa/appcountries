import { useNavigate } from "react-router-dom";
import { MuiButton } from "../components/MuiButton"
import WestIcon from '@mui/icons-material/West';


export const CountriesDetail = () => {
  const navigate = useNavigate();
  console.log(navigate);

  const returnCountriespage = () =>{
    navigate('/')
  }
  
  return (
    <div className="w-full border-2 border-red-300">
      <MuiButton onClick={returnCountriespage} variant="outlined" title="Back" icon={<WestIcon/>} />
    </div>
  )
}
