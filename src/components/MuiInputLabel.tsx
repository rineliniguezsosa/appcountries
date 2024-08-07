import { InputLabel } from "@mui/material"
import { MuiInputLabelProps } from '../types/index'

export const MuiInputLabel = ({className,id,htmlFor,children}:MuiInputLabelProps) => {
  return (
    <InputLabel className={className} id={id} htmlFor={htmlFor}>{children}</InputLabel>
  )
}
