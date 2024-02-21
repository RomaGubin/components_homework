function Button ({ handleFilter, filters, filtered }) {
  return (
    <>
    {
      filters.map(filter => (
      
        <button 
          key={filter} 
          className={` ${filtered === filter ? 'btn btn-outline btn-secondary' : 'btn btn-outline'}`} 
          onClick={() => handleFilter(filter)}
          >
          {filter}
        </button>
        
      ))
    }
    </>
  );
}

export default Button