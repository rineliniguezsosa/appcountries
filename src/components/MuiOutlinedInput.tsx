import { OutlinedInput } from "@mui/material"
import { MuiOutlinedInputProps } from "../types"


export const MuiOutlinedInput = ({id,fullWidth = false,type,startAdornment,label,className,onChange,sx}:MuiOutlinedInputProps) => {
  return (
    <OutlinedInput 
      id={id}
      fullWidth={fullWidth}
      type={type} 
      startAdornment={startAdornment} 
      label={label} 
      className={className}
      sx={sx}
      onChange={onChange}
      classes={{
        input: 'font-sans font-semibold text-sm text-black dark:text-white', // Aplica la clase directamente al input
      }}
    />
  )
}
