import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { APP_STRINGS } from "../../constants/appStrings";
import CustomButton from "../CustomButton/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartItemById } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, title, price, sku } = product;
  const { UI } = APP_STRINGS;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItem = useSelector((state) => selectCartItemById(state, id));
  const isInCart = !!cartItem;

  const handleButtonClick = () => {
    if (isInCart) navigate("/cart");
     else dispatch(addItem({ id, title, price, sku }));
    
  };

  return (
    <Card
      sx={{
        display: "flex",
        minHeight: 300,
        maxHeight: 300,
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <CardMedia
        component="img"
        image={"/image-product.jpg"}
        alt={title}
        sx={{ minHeight: 150, objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom component="div" align="center" noWrap>
          {title}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          fontWeight={600}
        >
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <CustomButton
          aria-label={isInCart ? UI.GO_TO_CART : UI.ADD_TO_CART}
          size="small"
          variant="contained"
          fullWidth
          onClick={handleButtonClick}
        >
          {isInCart ? UI.GO_TO_CART : UI.ADD_TO_CART}
        </CustomButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
