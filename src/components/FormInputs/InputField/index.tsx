import React from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';
import  TextField  from '@mui/material/TextField';
InputField.propTypes = {

};

interface props{
    form: UseFormReturn<any>;
    name: string;
    label: string;
    disabled?: boolean;
    placeholder?:string;
    hidden?:boolean;
}
function InputField(props:props) {
    const { form, name, label, disabled, placeholder,hidden } = props;
    const { formState } = form;
    const hasError = formState.errors[name] && formState.touchedFields[name];
    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field }) =>
                <TextField
                    hidden={hidden}
                    {...field}
                    placeholder={placeholder}
                    label={label}
                    fullWidth
                    disabled={disabled}
                    error={hasError}
                    variant="outlined"
                    margin='normal'
                    helperText={formState.errors[name]?.message}
                />}
        />
    );
}
export default InputField;
