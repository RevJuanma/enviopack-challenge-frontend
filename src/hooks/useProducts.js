import { useState, useCallback, useMemo, useEffect } from "react";
import { fetchProductsData } from "../services/api";

// cache para los productos
const productCache = new Map();

const createProductResource = (page, limit, searchTerm, sortOrder) => {
  const cacheKey = `${page}-${limit}-${searchTerm}-${sortOrder}`;

  if (!productCache.has(cacheKey)) {
    const promise = fetchProductsData({
      page,
      limit,
      search: searchTerm,
      sort: sortOrder,
    }).then((data) => {
      productCache.set(cacheKey, data);
      return data;
    });
    productCache.set(cacheKey, promise);
  }

  return {
    read() {
      const result = productCache.get(cacheKey);
      if (result instanceof Promise) {
        throw result;
      }
      return result;
    },
  };
};

export const useProducts = (initialPage = 1, initialLimit = 6) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  const productResource = useMemo(
    () =>
      createProductResource(currentPage, initialLimit, searchTerm, sortOrder),
    [currentPage, initialLimit, searchTerm, sortOrder]
  );

  useEffect(() => {
    try {
      const { totalPages } = productResource.read();
      setTotalPages(totalPages);
    } catch (promise) {
      promise.then(() => {
        const { totalPages } = productResource.read();
        setTotalPages(totalPages);
      });
    }
  }, [productResource]);

  const changePage = useCallback((newPage) => {
    setCurrentPage(newPage);
  }, []);

  const searchProducts = useCallback((term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchTerm("");
    setCurrentPage(1);
  }, []);

  const updateSortOrder = useCallback((newSortOrder) => {
    setSortOrder(newSortOrder);
    setCurrentPage(1);
  }, []);

  return {
    productResource,
    currentPage,
    totalPages,
    changePage,
    searchProducts,
    clearSearch,
    searchTerm,
    sortOrder,
    updateSortOrder,
  };
};
