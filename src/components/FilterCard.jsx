function FilterCard({option, handle, filters}){
  return(
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
  )
}

export default FilterCard