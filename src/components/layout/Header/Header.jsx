import React from "react";
import "./header.css";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { APP_STRINGS } from "../../../constants/appStrings";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../features/user/userSlice";
import { selectCartItemsQuantity } from "../../../features/cart/cartSlice";

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.grey.A100,
  display: "inline-flex",
  alignItems: "center",
  "&:hover": {
    textDecoration: "none",
  },
}));

const Header = () => {
  const { HEADER } = APP_STRINGS;
  const user = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();
  const cartItemsQuantity = useSelector(selectCartItemsQuantity);

  const handleDoubleClick = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <StyledLink to={"/"} sx={{fontWeight: 700}}>{HEADER.STORE}</StyledLink>
      <Box display="flex" flexDirection="row" gap={2} alignItems="center">
        {user ? (
          <>
            <Typography
              onDoubleClick={handleDoubleClick}
              style={{ cursor: "pointer", userSelect: "none" }}
            >
              {user.firstName}
            </Typography>

            <StyledLink className="link" to="/cart" sx={{fontWeight: 700}}>
              {HEADER.CART}
              {`(${cartItemsQuantity})`}
            </StyledLink>
            <Typography>{`${
              HEADER.CREDIT
            }: $${user.credit.toLocaleString()}`}</Typography>
          </>
        ) : (
          <StyledLink className="link" to="/login">
            {HEADER.LOGIN}
          </StyledLink>
        )}
      </Box>
    </header>
  );
};

export default Header;
