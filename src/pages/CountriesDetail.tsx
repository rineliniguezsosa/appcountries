import { useNavigate,useParams } from "react-router-dom";
import { MuiButton } from "../components/MuiButton"
import WestIcon from '@mui/icons-material/West';


export const CountriesDetail = () => {
  const navigate = useNavigate();
  console.log(navigate);

  const returnCountriespage = () =>{
    navigate('/')
  }
  
  return (
    <div className="px-7 py-10 w-full h-screen border-2 border-red-300 bg-LightModeBgGray ">

      {/* inicio div */}
      <div className="border-2 border-blue-400">
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
      <article className="w-full border-2 border-green-300 mt-20">

      </article>
      {/* fin article */}
    </div>
  )
}
