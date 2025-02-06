import { Close } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { APP_STRINGS } from "../../constants/appStrings";
import { useDispatch } from "react-redux";
import { removeItem } from "../../features/cart/cartSlice";
import { grey } from "@mui/material/colors";

const CartCard = ({ product }) => {
  const { UI } = APP_STRINGS;
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(product.id));
  };
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flex: 1,
        alignItems: "center",
        boxShadow: "none",
        backgroundColor: grey[200],
      }}
    >
      <CardMedia
        component="img"
        image="/image-product.jpg"
        alt={product.title}
        sx={{ maxWidth: { xs: 120, md: 80 }, objectFit: "contain" }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: { xs: "center", md: "flex-start" },
          gap: { xs: 2, md: 0 },
          flex: 2,
        }}
      >
        <Typography>{product.title}</Typography>
        <Typography fontWeight={600}>${product.price}</Typography>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label={UI.CLOSE}
          onClick={handleRemoveItem}
          sx={{
            backgroundColor: grey[900],
            color: grey.A100,
            borderRadius: 1,
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: grey[800],
            },
          }}
        >
          <Close />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CartCard;
