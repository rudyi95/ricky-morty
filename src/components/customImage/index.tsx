import React, { memo } from "react";
import { CircularProgress } from "@mui/material";
import classNames from "classnames";

import DefaultImage from "../../assets/emptyImage.png";

import useStyles from "./style";

interface IProps {
  src?: string;
  alt: string;
  loading?: boolean;
  className?: string;
}

const CustomImage: React.FC<IProps> = ({ src, alt, loading, className }) => {
  const classes = useStyles();

  if (loading) return <CircularProgress />;

  return (
    <div className={classNames(classes.root, className)}>
      <img src={src || DefaultImage} alt={alt} className={classes.image} />
    </div>
  );
};

export default memo(CustomImage);
