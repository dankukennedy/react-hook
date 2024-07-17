import { Stack, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { Schema } from '../types/schema';
import { RHFAutocomplete } from '../../components/RHFAutocomplete';
import { useEffect } from 'react';
import { useGenders, useLanguage, useSkills, useStates } from '../services/queries';
import { RHFAToggleButtonGroup } from '../../components/RHFAToggleButtonGroup';
import { RHFARadioGroup } from '../../components/RHFARadioGroup';
import { RHFACheckbox } from '../../components/RHFACheckbox';
import { RHFADateTimePicker } from '../../components/RHFADateTimePicker';


export  function Users(){  
  
  const statesQuery = useStates()
  const languagesQuery = useLanguage()
  const genderQuery = useGenders()
  const skillsQuery = useSkills()

    const {
        register,
         formState:{errors},
         watch
        } = useFormContext<Schema>();


  useEffect(() =>{
     const sub = watch( (value)=>{
        console.log(value);
      } );
      return () => sub.unsubscribe();
  }, [watch]);

      return (     
        <Stack sx={{gap:2}} >
        <TextField   {...register('name')} label="Name" error={!!errors.name} 
        helperText={errors.name?.message}
        />
        <TextField   {...register('email')} label="Email" error={!!errors.email} 
        helperText={errors.email?.message}
         />
         <RHFAutocomplete<Schema> name="states" label= 'States' options={statesQuery.data}
            />
         <RHFAToggleButtonGroup<Schema> name="languagesSpoken" options={languagesQuery.data }/>
         <RHFARadioGroup<Schema> name="gender" options={ genderQuery.data}  label='Gender'/>
         <RHFACheckbox<Schema> name="skills" options={skillsQuery.data} label='Skills'/>
         <RHFADateTimePicker<Schema>  name="registrationDateAndTime" label="Registration Date & Time" />
        </Stack>
  );
}