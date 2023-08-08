import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setReload } from "./redux/reload";
import ProductList from "./components/ProductList/ProductList";
import SortBy from "./components/SortBy/SortBy";
import Filters from "./components/Filters/Filters";
import "./App.css";

const App = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const params = useSelector(state => state.data.value);
  const loading = useSelector(state => state.reload.value);

  if (loading) {
    fetch("https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params)
    })
      .then(res => res.json())
      .then(data => {
        setData(data);
        dispatch(setReload(false));
      })
    ;
  }

  return (
    <div id="app">
    {loading && !data ? (
      <h2>Loading...</h2>
    ) : !loading && data && data.products ? (
      <>
        <div id="filterColWrapper">
          <Filters filters={data.facets} />
        </div>
        <div id="resultsColWrapper">
          <div>
            <SortBy numProducts={data.products.length} />
            <ProductList productsData={data.products} totalProds={data.pagination.total} />
          </div>
        </div>
      </>
      ) : (
        <h1>Error!</h1>
      )}
    </div>
  );
}

export default App;
