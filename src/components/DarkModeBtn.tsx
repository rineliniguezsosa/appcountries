import { MuiButton } from "./MuiButton";
import { useEffect,useState } from "react"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export const DarkModeBtn = () => {
  return (
    <MuiButton variant="text" title="Dark mode" icon={<DarkModeOutlinedIcon/>}/>      
  )
}
