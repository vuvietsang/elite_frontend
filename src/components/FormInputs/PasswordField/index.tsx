import TextField from "@mui/material/TextField";
import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";

interface props {
  form: UseFormReturn<any>;
  name: string;
  label: string;
  disabled?: boolean;
  placeholder?: string;
}

function PasswordField(props: props) {
  const { form, name, label, disabled } = props;
  const { formState } = form;
  const hasError = formState.errors[name];

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField
          {...field}
          variant="outlined"
          margin="normal"
          required
          type="password"
          fullWidth
          label={label}
          disabled={disabled}
          error={!!hasError}
          helperText={formState.errors[name]?.message}
        />
      )}
    />
  );
}

export default PasswordField;
