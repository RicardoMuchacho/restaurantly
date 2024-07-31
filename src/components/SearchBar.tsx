import React from "react";

interface Props {
  fetchRestaurants: () => void;
  setSearch: (search:string) => void;
  search: string;
  loading: boolean;
}

const SearchBar = ({search, loading, setSearch, fetchRestaurants}:Props) => {

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission
      handleSearch(e);
    }
  };

  const handleSearch = (e:any) => {
    e.preventDefault();
    fetchRestaurants();
  }

  return (
    <form className="d-flex w-100 gap-2 justify-content-center">
      <input
        style={{height: 45, maxWidth: "70%"}}
        className="form-control flex-grow-1"
        type="search"
        placeholder="Ejemplo: Pizza en Barcelona 08029"
        aria-label="Search"
        onChange={(e:any) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button 
        className="btn btn-primary" 
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