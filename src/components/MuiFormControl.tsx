import { FormControl } from "@mui/material"
import { MuiFormControlProps } from '../types/index'

export const MuiFormControl = ({variant,className,fullWidth,children}:MuiFormControlProps) => {
  return (
    <FormControl variant={variant} className={className} fullWidth={fullWidth}>{children}</FormControl>
  )
}
