
export default function SearchForm({handleChange, searchTerm}) {
 
    return (
      <section className="filter-field-cta">
      <label htmlFor='name'>Search: </label>
      <input id='name' type='text' name='name' placeholder='Find By Name' onChange={handleChange} value={searchTerm} />
      </section>
    );
  }