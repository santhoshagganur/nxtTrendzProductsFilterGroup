import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {categoryOptions, ratingsList} = props

  return (
    <div className="filters-group-container">
      <div className="search-bar">
        <input type="search" placeholder="Search" className="search-content" />
        <BsSearch />
      </div>
      <h1 className="filters-category-heading"> Category </h1>
      <ul className="filters-list">
        {categoryOptions.map(each => (
          <li className="each-filter-item"> {each.name} </li>
        ))}
      </ul>
      <h1 className="filters-category-heading"> Rating </h1>
      <ul className="filters-list">
        {ratingsList.map(each => (
          <li className="each-rating">
            <img src={each.imageUrl} className="rating-image" alt="rating" />
            <p className="each-rating-item"> & up</p>
          </li>
        ))}
      </ul>
      <button type="button" className="clear-filters-button">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
