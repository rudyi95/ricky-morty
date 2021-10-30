import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import classNames from "classnames";

import useStyles from "./style";

interface IProps {
  loading?: boolean;
}

const CustomInput: React.FC<IProps & TextFieldProps> = ({
  loading,
  onChange,
  placeholder,
  className,
  children,
}) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.root, className)}>
      <TextField
        type="number"
        variant="standard"
        disabled={loading}
        onChange={onChange}
        placeholder={placeholder}
        InputProps={{
          endAdornment: children,
        }}
      />
    </div>
  );
};

export default CustomInput;
