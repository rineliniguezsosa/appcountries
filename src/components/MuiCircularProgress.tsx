import { CircularProgress } from '@mui/material';
import { MuiCircularProgressProps } from '../types';

export const MuiCircularProgress = ({color}:MuiCircularProgressProps) => {
  return (
    <div className='w-full flex flex-row justify-center'>
        <CircularProgress color={color}/>
    </div>
  )
}
