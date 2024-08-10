import { MenuItem } from "@mui/material"
import { MuiMenuItemProps } from '../types';

export const MuiMenuItem = ({title,value,className}:MuiMenuItemProps) => {
  return (
    <MenuItem value={value} className={className}>{title}</MenuItem>
  )
}
