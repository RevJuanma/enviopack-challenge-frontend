import React, { Suspense } from "react";
import { Box, Container } from "@mui/material";
import FilterBar from "../components/FilterBar/FilterBar";
import { useProducts } from "../hooks/useProducts";
import PaginationController from "../components/PaginationController/PaginationController";
import Loader from "../components/Loader/Loader";
import ProductList from "../components/ProductList/ProductList";

const Home = () => {
  const {
    productResource,
    searchProducts,
    searchTerm,
    currentPage,
    totalPages,
    sortOrder,
    changePage,
    updateSortOrder,
  } = useProducts();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <FilterBar
        searchTerm={searchTerm}
        searchProducts={searchProducts}
        sortOrder={sortOrder}
        updateSortOrder={updateSortOrder}
      />
      <Suspense fallback={<Loader />}>
        <ProductList productResource={productResource} />
      </Suspense>
      <Box>
        <PaginationController
          currentPage={currentPage}
          changePage={changePage}
          totalPages={totalPages}
        />
      </Box>
    </Container>
  );
};

export default Home;
