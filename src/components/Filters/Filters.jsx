import React from 'react';
import  Filter from '../Filter/Filter';
import './Filters.css';

const Filters = (filters) => {
    const sortedFilters = filters.filters.sort((a,b) => a.priority - b.priority);
    return (
        <div id="filtersWrapper">
            <h2 id="filtersTitle">
                Filter By
            </h2>
            {sortedFilters.map((filter, i) => {
                return <Filter filterInfo={filter} key={i} />
            })}
        </div>
    )
}

export default Filters;