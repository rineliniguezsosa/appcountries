import { SelectChangeEvent,MenuProps } from '@mui/material'
import React, { CSSProperties } from 'react'

export interface MuiButtonProps {
    variant:'text' | 'outlined' | 'contained'
    onClick:()=> void,
    children:React.ReactNode,
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
    style?:CSSProperties,
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
    MenuProps?: Partial<MenuProps>,
    label:string,
    value:string,
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

export interface MuiMenuItemProps {
    value:string,
    children:React.ReactNode,
    className:string
}

export interface MenuItemListProps {
    id:number,
    value:string,
    title:string
}

export interface MuiLoadingButtonProps {
    loading:boolean,
    variant:'contained'| 'outlined'| 'text',
    className:string,
    style:CSSProperties,
    children:React.ReactNode
}