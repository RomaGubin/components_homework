function Button ({ handleFilter }) {
  
  const All = () => {
    handleFilter('All');
  }

  const Websites = () => {
    handleFilter('Websites');
  }
  
  const Flayers = () => {
    handleFilter('Flayers');
  }

  const BusinessCards = () => {
    handleFilter('Business Cards');
  }
  
  const handBut = (event, type) => {
    if (type === 'All') {
      All(event)
    } else if(type === 'Websites'){
      Websites(event)
    } else if(type === 'Flayers'){
      Flayers(event)
    } else {
      BusinessCards(event)
    }
  }

  return (
    <>
      <button className="btn btn-outline" onClick={(event) => handBut(event, 'All')}>
        All
      </button>
      <button className="btn btn-outline" onClick={(event) => handBut(event, 'Websites')}>
        Websites
      </button>
      <button className="btn btn-outline" onClick={(event) => handBut(event, 'Flayers')}>
        Flayers
      </button>
      <button className="btn btn-outline" onClick={(event) => handBut(event, 'Business Cards')}>
        Business Cards
      </button>
    </>
  )
}

export default Button