import { Box, IconButton, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import React from "react";
import { APP_STRINGS } from "../../constants/appStrings";

const PaginationController = ({ currentPage, changePage, totalPages }) => {
  const { UI } = APP_STRINGS;
  
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      columnGap={4}
      justifyContent={"center"}
      sx={{ width: "100%" }}
      marginBottom={4}
    >
      <IconButton
        color="primary"
        aria-label="previous page button"
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft />
      </IconButton>
      <Typography>
        {UI.PAGINATION}{" "}
        <span style={{ fontWeight: "bold" }}>{currentPage}</span> de{" "}
        <span style={{ fontWeight: "bold" }}>{totalPages}</span>
      </Typography>

      <IconButton
        color="primary"
        aria-label="next page button"
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
};

export default PaginationController;
