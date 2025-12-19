import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../../hooks/useAxios";
import { IoCartOutline } from "react-icons/io5";

const ProductDetails = () => {
  const { id } = useParams();
  const axios = useAxios();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/products/${id}`);
        setProduct(res.data);
      } catch {
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, axios]);

  if (loading) {
    return <span className="loading loading-infinity loading-xl"></span>;
  }

  if (error) {
    return (
      <p className="text-center mt-20 text-xl text-red-600 font-semibold">
        {error}
      </p>
    );
  }

  return (
    <section className="body-font overflow-hidden pt-20">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="lg:w-1/2 w-full h-64 object-cover rounded"
          />

          <div className="lg:w-1/2 w-full lg:pl-10 mt-6">
            <h1 className="text-3xl font-medium mb-1">{product.title}</h1>

            <p className="text-gray-600 mb-4">{product.description}</p>

            <h2 className="text-xl font-bold mb-3">Price: ${product.price}</h2>

            <button className="btn btn-primary flex gap-2">
              <IoCartOutline size={18} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
