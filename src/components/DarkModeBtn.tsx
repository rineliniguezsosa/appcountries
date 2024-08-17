import { MuiButton } from "./MuiButton";
import { useEffect,useState } from "react"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

export const DarkModeBtn = () => {
  const [darkmode, setdarkmode] = useState(false);

  useEffect(()=>{
    if(darkmode){ 
      document.documentElement.classList.toggle('dark') 
      localStorage.setItem('theme',JSON.stringify(true))
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.removeItem('theme');
    }
  },[darkmode])

  return (
    <MuiButton 
      variant="text"
      onClick={()=> setdarkmode(!darkmode)} 
      className="" 
      style={{textTransform:'none'}} 
      icon={<DarkModeOutlinedIcon className="text-black dark:text-white"/>}
      >
        <span className="font-sans font-semibold text-xs text-black dark:text-white">Dark mode</span>
      </MuiButton>
        
  );
}
