import { Box, Card, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { APP_STRINGS } from "../constants/appStrings";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton/CustomButton";
import CartCard from "../components/CartCard/CartCard";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../features/cart/cartSlice";
import { handleFinalizePurchase } from "../utils/functions";

const Cart = () => {
  const { CART, ORDER_STATUS } = APP_STRINGS;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isProcessing, setIsProcessing] = useState(false);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const userCredits = useSelector((state) => state.user.profile.credit);

  const onFinalizePurchase = () => {
    handleFinalizePurchase(
      cartTotal,
      userCredits,
      dispatch,
      navigate,
      setIsProcessing
    );
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      {cartItems.length ? (
        <>
          <Card
            sx={{
              padding: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "100%",
            }}
          >
            {cartItems.map((item) => (
              <CartCard key={item.id} product={item} />
            ))}
          </Card>
          <Card sx={{ padding: 2, width: "100%" }}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography variant="h6">{CART.TOTAL}:</Typography>
              <Typography variant="h5" fontWeight={700}>
                ${cartTotal}
              </Typography>
            </Box>
          </Card>
          <Box
            display={"flex"}
            flexDirection={{ xs: "column", sm: "row" }}
            rowGap={2}
            width={"100%"}
            justifyContent={"space-between"}
          >
            <CustomButton
              aria-label={ORDER_STATUS.BACK_TO_CATALOG}
              component={Link}
              variant="contained"
              to={"/"}
            >
              {ORDER_STATUS.BACK_TO_CATALOG}
            </CustomButton>

            <CustomButton
              aria-label={ORDER_STATUS.FINALIZE_PURCHASE}
              variant="contained"
              onClick={onFinalizePurchase}
              loading={isProcessing}
            >
              {ORDER_STATUS.FINALIZE_PURCHASE}
            </CustomButton>
          </Box>
        </>
      ) : (
        <Card
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 400,
            marginTop: 5,
          }}
        >
          <Typography variant="h6" align="center" color="text.secondary">
            {CART.EMPTY_MESSAGE}
          </Typography>
          <CustomButton
            aria-label={ORDER_STATUS.BACK_TO_CATALOG}
            component={Link}
            variant="contained"
            to={"/"}
          >
            {ORDER_STATUS.BACK_TO_CATALOG}
          </CustomButton>
        </Card>
      )}
    </Container>
  );
};

export default Cart;
