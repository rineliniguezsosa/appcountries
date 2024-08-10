import { MenuItem } from "@mui/material"
import { MuiMenuItemProps } from '../types';

export const MuiMenuItem = ({children,value,className}:MuiMenuItemProps) => {
  return (
    <MenuItem value={value} className={className}>
        {children}
    </MenuItem>
  )
}
