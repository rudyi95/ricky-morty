import React, { memo } from "react";
import { Button, ButtonBaseProps } from "@mui/material";
import classNames from "classnames";

import useStyles from "./style";

interface IProps {
  text?: string;
  variant?: "text" | "outlined" | "contained" | undefined;
}

const CustomButton: React.FC<IProps & ButtonBaseProps> = ({
  text,
  className,
  onClick,
  disabled,
  variant = "text",
}) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.root, className)}>
      <Button variant={variant} onClick={onClick} disabled={disabled}>
        {text}
      </Button>
    </div>
  );
};

export default memo(CustomButton)