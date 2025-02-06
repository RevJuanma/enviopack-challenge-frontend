import { Card, CardActions, Container, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { APP_STRINGS } from "../constants/appStrings";
import CustomButton from "../components/CustomButton/CustomButton";

const OrderStatus = () => {
  const location = useLocation();
  const { status } = location.state || {};
  const isSuccess = status === 1;
  const { ORDER_STATUS } = APP_STRINGS;

  const message = isSuccess
    ? ORDER_STATUS.SUCCESS_MESSAGE
    : ORDER_STATUS.ERROR_MESSAGE;

  const buttonText = isSuccess
    ? ORDER_STATUS.BACK_TO_CATALOG
    : ORDER_STATUS.BACK_TO_CART;

  const linkTo = isSuccess ? "/" : "/cart";

  return (
    <Container maxWidth="sm">
      <Card sx={{ p: 4, mt: 4, textAlign: "center", borderRadius: 2 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          {message}
        </Typography>
        <CardActions sx={{ justifyContent: "center", mt: 3 }}>
          <CustomButton
            aria-label={buttonText}
            component={Link}
            to={linkTo}
            variant="contained"
            fullWidth
            size="large"
          >
            {buttonText}
          </CustomButton>
        </CardActions>
      </Card>
    </Container>
  );
};

export default OrderStatus;
