import { InputLabel } from "@mui/material"
import { MuiInputLabelProps } from '../types/index'

export const MuiInputLabel = ({style,className,id,htmlFor,children}:MuiInputLabelProps) => {
  return (
    <InputLabel  style={style} className={className} id={id} htmlFor={htmlFor} >{children}</InputLabel>
  )
}
