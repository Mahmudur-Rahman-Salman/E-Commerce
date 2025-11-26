import React from "react";
import ecommerceProductOne from "../../assets/offerproducts/e-commerce product 1.jpg";
import ecommerceProductTwo from "../../assets/offerproducts/e-commerce product 2.jpg";
import ecommerceProductThree from "../../assets/offerproducts/e-commerce product 3.jpg";

const Offers = () => {
  const offers = [
    {
      title: "Up to 40% Off",
      subtitle: "Winter Collection",
      image: ecommerceProductOne,
    },
    {
      title: "Buy 1 Get 1 Free",
      subtitle: "Accessories Sale",
      image: ecommerceProductTwo,
    },
    {
      title: "Mega Deals",
      subtitle: "Electronics Discount",
      image: ecommerceProductThree,
    },
  ];
  return (
    <>
      <section className="py-10 px-4">
        <h1 className="text-2xl font-bold mb-6">Special Offers</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="relative h-48 rounded-xl overflow-hidden shadow-md group cursor-pointer"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-white/50 flex flex-col justify-center items-center text-center text-black p-4">
                <h2 className="text-xl font-bold">{offer.title}</h2>
                <p className="text-sm mt-1">{offer.subtitle}</p>

                <button className="mt-3 px-4 py-1 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Offers;
