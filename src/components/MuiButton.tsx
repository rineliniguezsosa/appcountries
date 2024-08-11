import { Button } from "@mui/material"
import { MuiButtonProps } from "../types"

export const MuiButton = ({variant,onClick,children,className,style,icon}:MuiButtonProps) => {
  return (
    <Button variant={variant} onClick={onClick} className={className} style={style} startIcon={icon}>
        {children}
    </Button>
  )
}
