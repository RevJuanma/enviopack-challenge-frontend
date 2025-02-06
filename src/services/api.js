const handleError = (error) => {
  console.error("API Error:", error);
  throw error;
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchProductsData = async (options = {}) => {
  const { page = 1, limit = 6, search = "", sort = "" } = options;

  await delay(500);

  try {
    const mockData = await import("../utils/products.json");
    let allProducts = mockData.default.productos;

    if (search) {
      const searchLower = search.toLowerCase();
      allProducts = allProducts.filter((product) =>
        product.title.toLowerCase().includes(searchLower)
      );
    }

    if (sort) {
      allProducts.sort((a, b) => {
        if (sort === "asc") {
          return a.price - b.price;
        } else if (sort === "desc") {
          return b.price - a.price;
        }
        return 0;
      });
    }

    const totalProducts = allProducts.length;
    const totalPages = Math.ceil(totalProducts / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = allProducts.slice(startIndex, endIndex);

    return {
      products: paginatedProducts,
      currentPage: page,
      totalPages: totalPages,
      totalProducts: totalProducts,
    };
  } catch (error) {
    return handleError(new Error("Mock data not found"));
  }
};

export const getProducts = (endpoint) => fetchProductsData(endpoint);
