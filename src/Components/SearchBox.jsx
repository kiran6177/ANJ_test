import React, { useState } from 'react'

function SearchBox({handleSearch}) {
    const [search,setSearch] = useState("");
  return (
    <div className='search-div' >
    <input type="text" value={search} onChange={(e)=>setSearch(e?.target?.value)} />
    <button onClick={()=>handleSearch(search)} >Search</button>
    </div>
  )
}

export default SearchBox
