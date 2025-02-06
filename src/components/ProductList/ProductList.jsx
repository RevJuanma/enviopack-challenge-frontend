import { Grid2 as Grid } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ productResource }) => {
  const { products } = productResource.read();

  return (
    <Grid container spacing={3} alignItems="stretch">
      {products.map((product) => (
        <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
