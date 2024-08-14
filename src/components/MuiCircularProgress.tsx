import { CircularProgress } from '@mui/material';
import { MuiCircularProgressProps } from '../types';

export const MuiCircularProgress = ({color}:MuiCircularProgressProps) => {
  return (
    <div className='w-full border-2 border-red-500 flex justify-center'>
        <CircularProgress color={color}/>
    </div>
  )
}
