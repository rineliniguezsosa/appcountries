import LoadingButton from '@mui/lab/LoadingButton';
import { MuiLoadingButtonProps }from '../types';

export const MuiLoadingButton = ({size,loading,variant,className,style,children}:MuiLoadingButtonProps) => { 
    return (
    <LoadingButton size={size} loading={loading} variant={variant} className={className} style={style}>{children}</LoadingButton>
  )
}
