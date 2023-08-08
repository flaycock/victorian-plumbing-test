import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQueryParams } from "../../redux/fetchData";
import { setReload } from "../../redux/reload";
import "./Filter.css";

const Filter = ({ filterInfo }, key) => {
  const [expand, setExpand] = useState("expanded");
  const [optionExpand, setOptionExpand] = useState("collapsed");
  const dispatch = useDispatch();
  let currentParams = useSelector(state => state.data.value);
  let selectedFilterIDs = [];

  Object.keys(currentParams.facets).forEach(filterType => {
    currentParams.facets[filterType].forEach(filter => {
      selectedFilterIDs.push(filter.identifier);
    });
  });

  const expandFilterOptions = () => {
    if (optionExpand == "expanded") {
      setOptionExpand("collapsed");
    } else {
      setOptionExpand("expanded");
    }
  }

  const collaspeFilter = () => {
    if (expand == "expanded") {
      setExpand("collapsed");
    } else {
      setExpand("expanded");
    }
  }

  const applyFilter = (input) => {
    let newParams = JSON.parse(JSON.stringify(currentParams));
    let add = input.checked;
    let newFilterOptions = {
      identifier: input.id,
      value: JSON.parse(input.value)
    };
    if (newParams.facets[filterInfo.identifier]) {
      if (add) {
        newParams.facets[filterInfo.identifier].push(newFilterOptions)
      } else {
        newParams.facets[filterInfo.identifier].splice(newParams.facets[filterInfo.identifier].indexOf(newFilterOptions), 1);
        if (!newParams.facets[filterInfo.identifier].length) {
          delete newParams.facets[filterInfo.identifier];
        }
      }
    } else {
      newParams.facets[filterInfo.identifier] = [newFilterOptions];
    }
    newParams.additionalPages = 0;
    console.log("Changed filters: ", newParams);
    dispatch(setQueryParams(newParams));
    dispatch(setReload(true));
  }

  if (filterInfo.options.length) {
    return (
      <div key={key} className="filterWrapper">
        <div id={filterInfo.identifier} className="filterTitle" onClick={() => collaspeFilter()}>
          {filterInfo.displayName}
          <div className="filterCollapse">{expand == "expanded" ? "-" : "+"}</div>
        </div>
        <div className={`filterOptions ${expand}`}>
          {filterInfo.options.map((option, i) => {
            return (
              <div className={`filterOption ${i > 5 && optionExpand != "expanded" ? "hidden" : ""}`} key={i}>
                <input id={option.identifier} type="checkbox" checked={selectedFilterIDs.indexOf(option.identifier) != -1} value={JSON.stringify(option.value)} onChange={(e) => applyFilter(e.target)} />
                <label>
                  &nbsp;{option.displayValue}&nbsp;
                  {option.productCount && (
                    <span className="filterOptionCount">({option.productCount})</span>
                  )}
                </label>
              </div>
            )
          })}
        </div>
        {filterInfo.options.length > 6 && (
          <div className={`filterOptionsExpand ${expand}`} onClick={() => expandFilterOptions()}>
            {optionExpand == "expanded" ? "Show Less" : "Show More"}
          </div>
        )}
      </div>
    );
  }
}

export default Filter;