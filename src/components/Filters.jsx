import FilterCard from "./FilterCard"

function Filters({list, buttonName, handle, filters, nameOrTitle}){
  return(
    <>
      <button>{buttonName}</button>
      <div className="filters-container">
        {list?.map(item => 
          <FilterCard 
            option={!nameOrTitle ? item : (nameOrTitle == "title"? item.title : item.name)} 
            handle={handle} 
            filters={filters}/>
        )}
      </div>
    </>
  )
}

export default Filters