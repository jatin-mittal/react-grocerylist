
function Search({search , setSearch})   {


    return ( 
        <>
        <form className="searchForm"
         onSubmit={(e)=>e.preventDefault()
        }>
       
        <label  htmlfor="searchForm">Search</label>
  <input 
  type="text"
   id="searchForm"
    placeholder="Search" 
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    />
           

        </form>
        </>
     );
}

export default Search;