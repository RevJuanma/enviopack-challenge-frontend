import { Typography } from "@mui/material";
import React from "react";

const Title = ({ title }) => {
  return (
    <Typography variant="h3" align="center" fontWeight={700}>
      {title}
    </Typography>
  );
};

export default Title;
