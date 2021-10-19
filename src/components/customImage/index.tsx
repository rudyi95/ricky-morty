import React from "react";
import { CircularProgress } from "@mui/material";
import classNames from "classnames";

import DefaultImage from "../../assets/emptyImage.png";

import useStyles from "./style";

interface IProps {
  src?: string;
  alt: string;
  onDelete?: () => void;
  loading?: boolean;
  className?: string;
}

export const CustomImage: React.FC<IProps> = ({
  src,
  alt,
  onDelete,
  loading,
  className,
}) => {
  const classes = useStyles();

  if (loading) return <CircularProgress />;

  return (
    <div className={classNames(classes.root, className)}>
      {!!onDelete && (
        <div
          className={classes.removeCircle}
          onClick={(e) => {
            onDelete();
            e.stopPropagation();
          }}
        >
          X
        </div>
      )}
      <img src={src || DefaultImage} alt={alt} className={classes.image} />
    </div>
  );
};
