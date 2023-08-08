import ProductTile from "../ProductTile/ProductTile";
import { useSelector, useDispatch } from "react-redux";
import { setQueryParams } from "../../redux/fetchData";
import { setReload } from "../../redux/reload";
import "./ProductList.css";

const ProductList = (props) => {
  const { productsData, totalProds } = props;
  const dispatch = useDispatch();
  let currentParams = useSelector(state => state.data.value);
 
  const loadMoreProducts = () => {
    let newParams = {...currentParams};
    newParams.additionalPages += 1;
    dispatch(setQueryParams(newParams));
    dispatch(setReload(true));
  }

  return (
    <>
      <div id="productListWrapper">
        {productsData.map((prodData, i) => {
          return <ProductTile productData={prodData} key={i} />
        })}
      </div>
      <div id="productsViewed">
        You&apos;ve viewed {productsData.length} of {totalProds} results
      </div>
      <div id="showMore" onClick={() => loadMoreProducts()}>
        Load More
      </div>
    </>
  )
}

export default ProductList;