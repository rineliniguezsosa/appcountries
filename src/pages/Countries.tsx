import { 
  FormControl,IconButton, InputAdornment, InputLabel, OutlinedInput, Select,
   MenuItem, SelectChangeEvent
} from "@mui/material";
import { MuiFormControl } from "../components/MuiFormControl";

export const Countries = () => {
  return (
    <div className="w-full h-screen border-2 border-red-900 px-7 py-7">
      <form>
           {/* inicio FormControl */}
           <MuiFormControl variant="outlined" fullWidth={true}>
                    <InputLabel 
                    className="text-LightModeDarkGrayInput" 
                    id="country-name" 
                    htmlFor="outlined-adornment-search"
                    >
                      Search for a country...
                    </InputLabel>
      
           </MuiFormControl>
           {/* fin FormControl */}
      </form>
    </div>
  )
}
