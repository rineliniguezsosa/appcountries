import { OutlinedInput } from "@mui/material"
import { MuiOutlinedInputProps } from "../types"


export const MuiOutlinedInput = ({id,fullWidth,type,startAdornment,label,className,onChange,InputProps}:MuiOutlinedInputProps) => {
  return (
    <OutlinedInput 
      id={id}
      fullWidth={fullWidth}
      type={type} 
      startAdornment={startAdornment} 
      label={label} 
      className={className}
      onChange={onChange}
      inputProps={InputProps}
    />
  )
}
