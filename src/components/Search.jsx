const Search = ({ filterValue, setFilterValue }) => {
  return (
    <section id="home-header">
      <input
        type="text"
        placeholder="Search..."
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
    </section>
  )
}

export default Search
