import { MenuItem } from "@mui/material"
import { MuiMenuItemProps } from '../types';

export const MuiMenuItem = ({children,value,className,style}:MuiMenuItemProps) => {
  return (
    <MenuItem  value={value} className={className} style={style}>
        {children}
    </MenuItem>
  )
}
