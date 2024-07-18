import { Stack, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { Schema } from '../types/schema';
import { RHFAutocomplete } from '../../components/RHFAutocomplete';
import { useEffect } from 'react';
import { useGenders, useLanguage, useSkills, useStates } from '../services/queries';
import { RHFToggleButtonGroup } from '../../components/RHFToggleButtonGroup';
import { RHFRadioGroup } from '../../components/RHFRadioGroup';
import { RHFCheckbox } from '../../components/RHFCheckbox';
import { RHFDateTimePicker } from '../../components/RHFDateTimePicker';
import { RHFDateRangePicker } from '../../components/RHFDateRangePicker';
import { RHFSlider } from '../../components/RHFSlider';
import { RHFSwitch } from '../../components/RHFSwitch';
import { RHFTextField } from '../../components/RHFTextField';


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
        <RHFTextField<Schema> name="name" label="Name" />
        <RHFTextField<Schema> name="email" label="Email" />
         <RHFAutocomplete<Schema> name="states" label= 'States' options={statesQuery.data} />
          <RHFToggleButtonGroup<Schema> name="languagesSpoken" options={languagesQuery.data }/>
          <RHFRadioGroup<Schema> name="gender" options={ genderQuery.data}  label='Gender'/>
          <RHFCheckbox<Schema> name="skills" options={skillsQuery.data} label='Skills'/>
          <RHFDateTimePicker<Schema>  name="registrationDateAndTime" label="Registration Date & Time" />
          <Typography>Employment Period:</Typography>
          <Typography>Employment Period:</Typography>
          <RHFDateRangePicker<Schema>  name="formatEmploymentPeriod" />
          <RHFSlider<Schema> name="salaryRange"  label='salary Range' />
           <RHFSwitch<Schema> name="isTeacher" label="Are you the new Teacher" />

        </Stack>
  );
}