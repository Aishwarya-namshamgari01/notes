import { Input, InputLabel } from "@mui/material";

export function TextField({
  id,
  label,
  placeholder,
  sx,
  required,
  fullwidth,
  ...rest
}) {
  return (
    <>
      {label && <InputLabel required={required} />}
      <Input
        id={id}
        placeholder={placeholder}
        fullWidth={fullwidth}
        sx={[sx]}
        disableUnderline={true}
        {...rest}
      />
    </>
  );
}
