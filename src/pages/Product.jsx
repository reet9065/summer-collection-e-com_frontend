import React from "react";
import ProductVeiw from "../components/ProductVeiw";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ProductOrderInfo from "../components/ProductOrderInfo";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "dbf1ef57camshc181a916b4a0629p1832ecjsnc6edb0b4d8b3",
    "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
  },
};

function Product() {
  var { productAsin } = useParams();
//   if (productAsin == "") {
//     productAsin = "B06Y2CH63N";
//   }
  const url = `https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${productAsin}&country=IN`;

  const { data, loading, error } = useFetch(url, options);

  console.log(data);

  return (
    <>
      {!data  && !error && <div className="text-center font-bold text-xl text-black">Loading...</div>}
      {error && <div className="text-center font-bold text-xl text-black">Internal Server error</div>}
      {!loading && !error && data && (
        <div>
          <ProductVeiw productImageurls={data.data.product_photos} />
          <ProductOrderInfo productInfo={data.data}/>
        </div>
      )}
    </>
  );
}

export default Product;
