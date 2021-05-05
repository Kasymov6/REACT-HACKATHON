import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { productContext } from "../../context/ProductContext";
import ProductCard from "./ProductCard";
const ProductsList = (props) => {
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
  return (
    <>
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
    </>
  );
};

export default ProductsList;
