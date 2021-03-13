import React, { useEffect, useState } from 'react';
import './search.css';

export default function Search(props)  {
    const [searchStr, setSearchStr] = useState('');

    useEffect( () => {
        if(searchStr.length >= 3) {
            fetch(`https://api.github.com/users/${searchStr}`)
                .then( res => res.json() )
                .then( result => props.setUser(result), error => console.log(error) );
        }
    }, [searchStr]);
    return (
        <div className="search__block">
            <h1>Start type github user name</h1>
            <form action="#">
                <input 
                    className="search__input" 
                    placeholder="Start type username"
                    value={searchStr}
                    onChange={ (event) => setSearchStr(event.target.value) }
                />
            </form>
        </div>
    );
}