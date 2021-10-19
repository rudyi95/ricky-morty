import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

import { CustomButton } from "../button";

import useStyles from "./style";
import classNames from "classnames";

interface IProps {
  loading?: boolean;
  onClick?: () => void;
  adornmentText?: string;
}

export const CustomInput: React.FC<IProps & TextFieldProps> = ({
  loading,
  onChange,
  onClick,
  adornmentText,
  placeholder,
  className,
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
          endAdornment: (
            <CustomButton
              disabled={loading}
              onClick={onClick}
              text={adornmentText}
            />
          ),
        }}
      />
    </div>
  );
};
