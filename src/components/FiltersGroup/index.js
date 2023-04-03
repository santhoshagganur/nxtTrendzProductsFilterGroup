import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    searchInput,
    activeCategoryId,
    activeRatingId,
    changeInputResults,
    changeCategory,
    changeRatings,
  } = props

  const changeInput = event => {
    changeInputResults(event.target.value)
  }

  return (
    <div className="filters-group-container">
      <div className="search-bar">
        <input
          type="search"
          placeholder="Search"
          className="search-content"
          onChange={changeInput}
        />
        <BsSearch />
      </div>
      <h1 className="filters-category-heading"> Category </h1>
      <ul className="filters-list">
        {categoryOptions.map(each => (
          <button
            type="button"
            className="filter-button-category"
            onClick={() => changeCategory(each.categoryId)}
          >
            <li className="each-filter-item"> {each.name} </li>
          </button>
        ))}
      </ul>
      <h1 className="filters-category-heading"> Rating </h1>
      <ul className="filters-list">
        {ratingsList.map(each => (
          <button
            className="filter-button-category"
            type="button"
            onClick={() => changeRatings(each.ratingId)}
          >
            <li className="each-rating">
              <img src={each.imageUrl} className="rating-image" alt="rating" />
              <p className="each-rating-item"> & up</p>
            </li>
          </button>
        ))}
      </ul>
      <button type="button" className="clear-filters-button">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
