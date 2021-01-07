const Search = ({ onChange }) => {
    return (
        <div className="search">
            <input className="search-input" autoFocus onChange={(e) => onChange(e.target.value)} placeholder="Filter" />
        </div>
    );
};

export default Search;
