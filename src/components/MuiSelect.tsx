import { Select } from "@mui/material"
import {MuiSelectProps} from '../types'

export const MuiSelect = ({labelId,id,fullWidth,className,MenuProps,sx,label,value,children,onChange }:MuiSelectProps) => {
  return (
    <Select 
      labelId={labelId} 
      id={id} 
      fullWidth={fullWidth}
      className={className}
      MenuProps={MenuProps} 
      label={label}
      value={value} 
      onChange={onChange}
      sx={sx}
    >
    {children}
    </Select>
  )
}
