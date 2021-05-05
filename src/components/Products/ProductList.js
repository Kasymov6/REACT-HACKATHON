import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { productContext } from "../../context/ProductContext";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const { getProducts, productsData, paginationPages } = useContext(
    productContext
  );
  const history = useHistory();
  const [page, setPage] = useState(getPage());

  function getPage() {
    const search = new URLSearchParams(history.location.search);
    return search.get("_page");
  }
  const handlePage = (e, page) => {
    const search = new URLSearchParams(history.location.search);
    search.set("_page", page);
    history.push(`${history.location.pathname}?${search.toString()}`);
    setPage(page);
    getProducts(history);
  };
  useEffect(() => {
    getProducts(history);
  }, []);
  console.log("hello");
  return (
    <>
    <div className="uiu">
    <video loop muted autoPlay className="fullscreen-bg__video-details">
        <source className="productDetails" src="https://content.rolex.com/dam/watches/family-pages/day-date/video/cover/classic-watches-day-date-cover-video.mp4" type="video/mp4" />
   </video>
   <div className="tot">
     <div className="container">
        <p className="watch-rolex">ЧАСЫ ROLEX — ЭТО ВНИМАНИЕ К КАЖДОЙ ДЕТАЛИ ПРИ СБОРКЕ.</p>
      <Grid container spacing={3}>
        {productsData.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </Grid>
      <Pagination
        page={+page}
        onChange={handlePage}
        count={paginationPages}
        color="primary"
      />
     </div>
   </div>
    </div>
    </>
  );
};

export default ProductsList;
