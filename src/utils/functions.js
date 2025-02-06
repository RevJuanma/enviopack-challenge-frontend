import { APP_STRINGS } from "../constants/appStrings";
import { clearCart } from "../features/cart/cartSlice";
import { updateUserCredits } from "../features/user/userSlice";

export const handleFinalizePurchase = (
  cartTotal,
  userCredits,
  dispatch,
  navigate,
  setIsProcessing
) => {
  setIsProcessing(true);

  // simula un retraso para imitar asincronia
  setTimeout(() => {
    console.log("userCredits", userCredits);
    console.log("cartTotal", cartTotal);
    if (userCredits >= cartTotal) {
      dispatch(updateUserCredits(userCredits - cartTotal));

      dispatch(clearCart());

      navigate("/order-status", { state: { status: 1 } });
    } else {
      navigate("/order-status", { state: { status: 0 } });
    }

    setIsProcessing(false);
  }, 1000);
};

export const getPageTitle = (location) => {
  const { PAGE_TITLES } = APP_STRINGS;
  const path = location.pathname;

  switch (path) {
    case "/":
      return PAGE_TITLES.CATALOG;
    case "/cart":
      return PAGE_TITLES.CART;
    case "/order-status":
      return PAGE_TITLES.ORDER_STATUS;
    default:
      return "Página no encontrada";
  }
};

export const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.price, 0);
};
