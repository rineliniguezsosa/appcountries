import { Button } from "@mui/material"
import { MuiButtonProps } from "../types"

export const MuiButton = ({variant,onClick,title,className,style,icon}:MuiButtonProps) => {
  return (
    <Button variant={variant} onClick={onClick} style={style} startIcon={icon}>
        <span className={className}>{title}</span>
    </Button>
  )
}
