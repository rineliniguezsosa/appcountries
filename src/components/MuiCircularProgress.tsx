import { CircularProgress } from '@mui/material';
import { MuiCircularProgressProps } from '../types';

export const MuiCircularProgress = ({color}:MuiCircularProgressProps) => {
  return (
    <div>
        <CircularProgress color={color}/>
    </div>
  )
}
