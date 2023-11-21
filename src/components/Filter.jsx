const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filtrar-options">
            <div>
                <p>Status:</p>
                <select value ={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="completed">Completas</option>
                    <option value="incompleted">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem Alfabética:</p>
                <button onClick={() => setSort("asc")}>Asc</button>
                <button onClick={() => setSort("desc")}>Desc</button>
            </div>
        </div>
    </div>
  )
}

export default Filter