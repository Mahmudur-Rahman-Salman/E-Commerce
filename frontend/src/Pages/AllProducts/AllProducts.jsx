
import { FiShoppingCart } from "react-icons/fi";
import ProductCard from "../../components/ProductCard/ProductCard";
import useProducts from '../../hooks/useProducts';





const AllProducts = () => {
  // const [allProducts, setAllProducts] = useState([]);

  // const axios = useAxios();

  // useEffect(() => {
  //   const allProductList = async () => {
  //     try {
  //       const res = await axios.get("/products"); // your backend products endpoint
  //       const data = res.data;

  //       // For now, just take first 8 products as featured
  //       setAllProducts(data);
  //     } catch (err) {
  //       console.error("Error fetching products:", err);
  //     }
  //   };

  //   allProductList();
  // }, [axios]);

  const { products } = useProducts();
  const allProducts = products;
 


  return (
    <>
      <section className="py-16 px-4">
        {/* Title */}
        <h1 className="text-3xl font-bold mt-20 mb-10 text-gray-900">
          All Products
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AllProducts;
