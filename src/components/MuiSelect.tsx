import { Select } from "@mui/material"
import {MuiSelectProps} from '../types'

export const MuiSelect = ({labelId, id, fullWidth, className, label, children,onChange }:MuiSelectProps) => {
  return (
    <Select labelId={labelId} id={id} fullWidth={fullWidth} className={className} label={label} onChange={onChange}>{children}</Select>
  )
}
