import React from 'react'

const SearchItem = ({searchItem,setSearchItem}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
    <input type='text' placeholder='Search item' id='search' className='searchItem mb-2'value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} />
    </form>
  )
}

export default SearchItem