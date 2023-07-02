import axios from "axios";
import { useRef, useState } from "react";


export default function SearchBar({setSelectedUsername}) {
    const [ search_results, setSearchResults ] = useState(null)
    const searchBarRef = useRef(null);

    const onSearchChange = async (e) => {
        const input = e.target.value;
        if (input !== ''){
            try{
                const uri = `${process.env.REACT_APP_API_URL}/api/search?username=${input}`;
                const data = (await (axios.get(uri))).data;
                if (data.length <= 0)
                    setSearchResults(['Username not found'])
                
                else
                    setSearchResults(data.map(obj => obj.username));
            }
            catch(err) {
                console.error(err);
                setSearchResults(['An error occured']);
            }
        }
        else
            setSearchResults(null);
    }

    const resetSearchBar = () => {
        setSearchResults(null);
        searchBarRef.current.value = '';
    }

    const selectUsername = (username) => {
        setSelectedUsername(username);
        resetSearchBar();
    }

    return (
        <div>
            <input onChange={onSearchChange} ref={searchBarRef} type="text" placeholder="Search using a username" />
            {search_results && 
                <div id="search-results">
                    {search_results.map(
                        (username, index) => <div key={index} onClick={() => selectUsername(username)}>{username}</div>
                    )}
                </div>
            }
        </div>
    )
}