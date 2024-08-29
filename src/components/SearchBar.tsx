import React from 'react'
import useRestaurants from '../hooks/useRestaurants'

interface Props {
  setSearch: (search: string) => void
  search: string
  loading: boolean
  fetchRestaurants: () => void
}

const SearchBar = ({ search, loading, setSearch, fetchRestaurants}: Props) => {
  const { getRestaurants } = useRestaurants()

  const handleSearch = (e: any) => {
    e.preventDefault()
    getRestaurants(search)
  }

  return (
    <form className="d-flex w-100 gap-2 justify-content-center">
      <input
        style={{ height: 45, maxWidth: '70%' }}
        className="form-control flex-grow-1"
        type="search"
        placeholder="Ejemplo: Pizza en Barcelona 08029"
        aria-label="Search"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.target.value) }}
      />
      <button
        className="btn btn-primary"
        onClick={fetchRestaurants}
        type='submit'
        disabled={loading || search.length === 0}
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar
