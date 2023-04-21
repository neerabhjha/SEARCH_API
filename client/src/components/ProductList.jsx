import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleProduct from "./SingleProduct";
import "../stylesheets/ProductList.css";

function ProductList() {
  const [products, setProducts] = useState();

  //fetch data from backend and store into a state
  async function fetchData() {
    try {
      const response = await axios.get("/allProducts");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // handling input search
  const handleSearch = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await axios.get(`/search/${key}`);
      if (result) {
        setProducts(result.data);
      }
    } else {
      fetchData();
    }
  };

  return (
    <div>
      <input
        className="input-box"
        type="text"
        placeholder="Search Products"
        onChange={handleSearch}
      />

      {/* passing data as a prop to the singleproduct  */}
      <div className="productList">
        {products?.length > 0 ? (
          products?.map((item) => (
            <SingleProduct key={item._id} product={item} />
          ))
        ) : (
          <h1>Product Not Found!!</h1>
        )}
      </div>
    </div>
  );
}

export default ProductList;
