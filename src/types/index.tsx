import React from 'react'

export interface MuiButtonProps {
    variant:'text' | 'outlined' | 'contained'
    onClick:()=> void,
    title:string,
    icon:React.ReactNode
}

export interface MuiFormControlProps {
    variant:'filled'|'outlined'|'standard',
    fullWidth:boolean
}