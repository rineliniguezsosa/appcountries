import LoadingButton from '@mui/lab/LoadingButton';
import { MuiLoadingButtonProps }from '../types';

export const MuiLoadingButton = ({loading,variant,className,style,children}:MuiLoadingButtonProps) => { 
    return (
    <LoadingButton loading={loading} variant={variant} className={className} style={style}>{children}</LoadingButton>
  )
}
