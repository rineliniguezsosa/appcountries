import { MuiButton } from "./MuiButton";
import { useEffect,useState } from "react"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export const DarkModeBtn = () => {
  const [darkmode, setdarkmode] = useState(false);

  useEffect(()=>{

  },[darkmode])

  return (
    <MuiButton variant="text" title="Dark mode" icon={<DarkModeOutlinedIcon/>}/>      
  )
}
