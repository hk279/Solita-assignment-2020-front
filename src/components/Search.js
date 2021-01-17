const Search = ({ onChange }) => {
    return (
        <div className="search">
            <input className="search-input" autoFocus onChange={(e) => onChange(e.target.value)} placeholder="Search" />
        </div>
    );
};

export default Search;
