import { MenuItem } from "@mui/material"


export const MuiMenuItem = ({title,value,className}:MuiMenuItemProps) => {
  return (
    <MenuItem value={value} className={className}>{title}</MenuItem>
  )
}
