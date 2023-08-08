import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQueryParams } from '../../redux/fetchData';
import { setReload } from '../../redux/reload';
import './SortBy.css';

const SortBy = ({ numProducts }) => {
    const dispatch = useDispatch();
    let currentParams = useSelector(state => state.data.value);
    let selectedFilter = currentParams.sort.toString();
    let sortingOptions = [
        {
            name: 'Recommended',
            value: "1"
        },
        {
            name: 'Lowest Price',
            value: "2"
        },
        {
            name: "Highest Price",
            value: "3"
        },
        {
            name: "Highest Discount",
            value: "4"
        }
    ]

    const updateQueryParams = (sortOpt) => {
        let newParams = {...currentParams};
        newParams.sort = parseInt(sortOpt);
        dispatch(setQueryParams(newParams));
        dispatch(setReload(true));
    }

    return (
        <div id="sortByWrapper">
          <div id="sortByOpts">
            <span id="sortByLabel">
                Sort By
            </span>
            <select id="sortByDropdown" defaultValue={selectedFilter} onChange={(e) => updateQueryParams(e.target.value)}>
                {sortingOptions.map((sortOption, i) => {
                    return <option key={i} value={sortOption.value}>{sortOption.name}</option>
                })}
            </select>
          </div>
          <div id="numProducts">
            {numProducts} products
          </div>
        </div>
    )
}

export default SortBy;