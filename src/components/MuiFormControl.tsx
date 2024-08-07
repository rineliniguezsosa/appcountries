import { FormControl } from "@mui/material"
import { MuiFormControlProps } from '../types/index'

export const MuiFormControl = ({variant,fullWidth,children}:MuiFormControlProps) => {
  return (
    <FormControl variant={variant} fullWidth={fullWidth}>{children}</FormControl>
  )
}
