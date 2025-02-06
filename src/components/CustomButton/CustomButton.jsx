import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.grey.A100,
  textTransform: "none",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: theme.palette.grey[800],
  },
}));

const CustomButton = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default CustomButton;
