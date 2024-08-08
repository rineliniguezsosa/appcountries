import { Select } from "@mui/material"
import {MuiSelectProps} from '../types'

export const MuiSelect = ({labelId, id, fullWidth, label, children,onChange }:MuiSelectProps) => {
  return (
    <Select labelId={labelId} id={id} fullWidth={fullWidth} label={label} onChange={onChange}>{children}</Select>
  )
}
