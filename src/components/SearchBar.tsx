import React from "react";

interface Props {
  fetchRestaurants: () => void;
  setSearch: (search:string) => void;
  search: string;
  loading: boolean;
}

const SearchBar = ({search, loading, setSearch, fetchRestaurants}:Props) => {

  const handleSearch = (e:any) => {
    e.preventDefault();
    fetchRestaurants();
  }

  return (
    <form className="d-flex w-70 gap-2">
      <input
        style={{height: 45, minWidth: 750}}
        className="form-control flex-grow-1"
        type="search"
        placeholder="Direction"
        aria-label="Search"
        onChange={(e:any) => setSearch(e.target.value)}
      />
      <button 
        className="btn text-white bg-primary" 
        onClick={handleSearch}
        disabled={loading || search.length === 0}
      >
        Search
      </button>
      {/* <button className="btn text-white bg-primary" type="submit">
        Filters
      </button> */}
    </form>
  )
}

export default SearchBar