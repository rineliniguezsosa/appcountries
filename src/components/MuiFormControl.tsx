import { FormControl } from "@mui/material"
import { MuiFormControlProps } from '../types/index'

export const MuiFormControl = ({variant,fullWidth}:MuiFormControlProps) => {
  return (
    <FormControl variant={variant} fullWidth={fullWidth}/>
  )
}
