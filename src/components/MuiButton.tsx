import { Button } from "@mui/material"
import { MuiButtonProps } from "../types"

export const MuiButton = ({variant,onClick,title,className,icon}:MuiButtonProps) => {
  return (
    <Button variant={variant} onClick={onClick} className={className} startIcon={icon}>
        {title}
    </Button>
  )
}
