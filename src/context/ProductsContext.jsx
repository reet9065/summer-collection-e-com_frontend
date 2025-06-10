// src/context/ProductsContext.jsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  // Function to clean and convert price strings to numbers
  const cleanPrice = (priceStr) => {
    if (!priceStr) return 0;

    // Remove currency symbols and commas
    const cleaned =  parseInt((priceStr || "").toString().replace(/[^0-9]/g, "")) || 0;

    return parseFloat(cleaned) || 0;
  };

  function getRandomPercentageOfValue(value) {
  const percentage = Math.random() * (80 - 10) + 10; // random between 10 and 80
  const result = (percentage / 100) * value;
  return result;
}


  // Function to transform product data
  const transformProduct = (product) => {
    // console.log(product.product_price);
    console.log(product);
    const originalPrice = cleanPrice(product.product_original_price) || Math.floor(Math.random() * (800 - 100 + 1)) + 100;
    const price = cleanPrice(product.product_price) || getRandomPercentageOfValue(originalPrice);
    const discount = originalPrice - price;
    const discountPercentage =
      originalPrice > 0 ? Math.round((discount / originalPrice) * 100) : 0;

    return {
      id: product.asin,
      title: product.product_title,
      price,
      originalPrice,
      discount,
      discountPercentage,
      image: product.product_photo,
      rating: product.product_star_rating || 0,
      ratingsCount: product.product_num_ratings || 0,
      delivery: product.delivery || "",
      isPrime: product.is_prime || false,
      url: product.product_url,
    };
  };

  // Fetch products function
  const fetchProducts = useCallback(
    async (pageNum = 1, append = false) => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://real-time-amazon-data.p.rapidapi.com/search?query=Summer%20wear%20for%20all%20men%20women%20kids&page=${pageNum}&country=IN&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
              "x-rapidapi-host": import.meta.env.VITE_RAPID_API_HOST,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();

        // Update total products count
        if (data?.data?.total_products) {
          setTotalProducts(data.data.total_products);
        }

        // Transform products
        const transformedProducts = data.data.products.map(transformProduct);

        // Update products state
        if (append) {
          setProducts((prev) => [...prev, ...transformedProducts]);
        } else {
          setProducts(transformedProducts);
        }

        // Check if there are more products
        setHasMore(
          data.data.products.length > 0 &&
            products.length + transformedProducts.length <
              data.data.total_products
        );
      } catch (err) {
        setError(err.message);
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    },
    [products.length]
  );

  // Initial fetch on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Load more products
  const loadMoreProducts = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchProducts(nextPage, true);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        error,
        hasMore,
        totalProducts,
        loadMoreProducts,
        refreshProducts: () => fetchProducts(1, false),
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}
