function FilterCard({option, handle, filters}){
  return(
    <li className="filter-card">
      <label key={option}>
        <input 
          type="checkbox"
          id={option}
          name={option}
          onChange={handle}
          checked={filters.includes(option)}
        />
        {option}
      </label>
    </li>
  )
}

export default FilterCard