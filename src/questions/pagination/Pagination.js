import "./pagination.css";
import { useState, useEffect } from "react";
import Pages from "./Pages";
const Pagination = () => {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 4;
  let totalProdct = 30;
  const totalPage = Math.ceil(totalProdct / productPerPage);

  const fetchPrdDetails = async () => {
    const data = await fetch(
      `https://dummyjson.com/products?limit=${productPerPage}&skip=${
        (currentPage - 1) * productPerPage
      } `
    );
    const res = await data.json();
    setProduct(res.products);
    // console.log("res ", res.products);
  };

  const currentPageFunc = (val) => {
    console.log("current-page-in-prd-page ", val);
    setCurrentPage(val);
  };
  useEffect(() => {
    fetchPrdDetails();
  }, [currentPage]);
  console.log("prd ", product);
  return (
    <>
      <div className="grid">
        {product.length > 0 ? (
          product.map((prd) => (
            <div className="card" key={prd.id}>
              <h3>{prd.title}</h3>
              <div>{prd.description}</div>
              <img src={prd.images[0]} />
              <div>{prd.price}</div>
            </div>
          ))
        ) : (
          <div>Loading......</div>
        )}
      </div>
      <Pages pageFunc={currentPageFunc} totalPage={totalPage} />
    </>
  );
};

export default Pagination;
