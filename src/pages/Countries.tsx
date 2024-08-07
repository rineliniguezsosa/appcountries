import { 
  IconButton, InputAdornment, OutlinedInput, Select,
   MenuItem, SelectChangeEvent
} from "@mui/material";
import { MuiFormControl } from "../components/MuiFormControl";
import { MuiInputLabel } from "../components/MuiInputLabel";

export const Countries = () => {
  return (
    <div className="w-full h-screen border-2 border-red-900 px-7 py-7">
      <form>
           {/* inicio FormControl */}
           <MuiFormControl variant="outlined" fullWidth={true}>
                    <MuiInputLabel 
                    className="text-LightModeDarkGrayInput" 
                    id="country-name" 
                    htmlFor="outlined-adornment-search"
                    >
                      Search for a country...
                    </MuiInputLabel>
      
           </MuiFormControl>
           {/* fin FormControl */}
      </form>
    </div>
  )
}
