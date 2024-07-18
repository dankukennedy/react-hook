import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFnsV3'
import {DateTimePicker, LocalizationProvider} from '@mui/x-date-pickers'
import { Slider, Typography } from "@mui/material";



type Props <T extends FieldValues> = {
    name:Path <T>;
    label:string;
}

export function RHFSlider<T extends FieldValues>({
    name,
    label
   }:Props<T>){
  
    const {control} = useFormContext<T>()

    return (
    <Controller control ={control}
     name={name} 
     render= {({field})=>( 
                <>
                 <Typography>{label}</Typography>
                 <Slider {...field} valueLabelDisplay="auto" />
                </>
            )}
         />
    );
}