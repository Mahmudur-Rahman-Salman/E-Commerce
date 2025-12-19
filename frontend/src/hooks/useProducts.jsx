import { useEffect, useState, useCallback } from "react";
import useAxios from "./useAxios";

const useProducts = () => {
  const axios = useAxios();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get("/products");
      setProducts(res.data);
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to load products");
    } finally {
      setLoading(false);
    }
  }, [axios]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    loading,
    error,
    refetch: fetchProducts,
  };
};

export default useProducts;
