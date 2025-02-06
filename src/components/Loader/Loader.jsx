import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={4}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
