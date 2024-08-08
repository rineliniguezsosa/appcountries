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
    <div className="w-full h-screen border-2 border-red-300 bg-LightModeBgGray ">

      {/* inicio div */}
      <div className="border-2 border-blue-400 px-7 py-7 ">
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
      <article>

      </article>
      {/* fin article */}
    </div>
  )
}
