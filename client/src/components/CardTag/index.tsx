import React from "react";
import { Tooltip, Typography } from "@mui/material";
import styles from "./CardTag.module.scss";

interface CardDetailProps {
  name: string;
  value: string | number;
  color: string;
}

const CardDetail: React.FC<CardDetailProps> = (props) => {
  const { name, value, color } = props;

  return (
    <Tooltip title={name} aria-label={`${name} : ${value}`}>
      <Typography
        component="span"
        className={styles.tag}
        style={{ backgroundColor: color }}
      >
        {value}
      </Typography>
    </Tooltip>
  );
};

export default CardDetail;
