import { MuiButton } from "./MuiButton";
import { useEffect,useState } from "react"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export const DarkModeBtn = () => {
  const [darkmode, setdarkmode] = useState(false);

  useEffect(()=>{
    darkmode ? document.documentElement.classList.toggle('dark') : document.documentElement.classList.remove('dark')
  },[darkmode])

  return (
    <MuiButton variant="text" onClick={()=> setdarkmode(!darkmode)} title="Dark mode" className="font-sans font-semibold text-xs text-black" style={{textTransform:'none'}} icon={<DarkModeOutlinedIcon/>}/>      
  )
}
