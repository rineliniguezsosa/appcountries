import { SelectChangeEvent } from '@mui/material'
import React, { CSSProperties } from 'react'

export interface MuiButtonProps {
    variant:'text' | 'outlined' | 'contained'
    onClick:()=> void,
    title:string,
    className?:string,
    style?:CSSProperties,
    icon:React.ReactNode
}

export interface MuiFormControlProps {
    variant:'filled'|'outlined'|'standard',
    fullWidth?:boolean,
    className?:string,
    children:React.ReactNode
}

export interface MuiInputLabelProps {
    className:string,
    id:string,
    htmlFor:string,
    children:React.ReactNode
}

export interface MuiOutlinedInputProps {
    id:string,
    fullWidth:boolean,
    type:'text',
    startAdornment:React.ReactNode,
    label:string,
    className?:string,
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=> void
}

export interface MuiSelectProps {
    labelId:string,
    id:string,
    fullWidth:boolean,
    className?:string,
    label:string,
    children:React.ReactNode,
    onChange:(event:SelectChangeEvent<string>)=> void
}

export interface MuiCircularProgressProps {
    color:'primary'| 'secondary'| 'error'| 'info'| 'success'| 'warning';
}

export interface CountryCardProps {
    flag:string,
    name:string,
    population:number
    region:string,
    capital:string[] | undefined
}