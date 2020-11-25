import React, { useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
    const [search, setSearch ] = useState('')

    const handleSubmit = (event) => {
            event.preventDefault();
            onFormSubmit(search)
    }

    return <div className="search-bar ui segment">
        <form onSubmit={handleSubmit}className="ui form">
            <label>Video Search</label>
            <input 
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)} >
                </input>
        </form>
    </div>
}

export default SearchBar;