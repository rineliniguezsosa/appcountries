import { Button } from "@mui/material"
import { MuiButtonProps } from "../types"

export const MuiButton = ({variant,onClick,title,icon}:MuiButtonProps) => {
  return (
    <Button variant={variant} onClick={onClick} startIcon={icon}>
        {title}
    </Button>
  )
}
