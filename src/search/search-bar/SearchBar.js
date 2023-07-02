import axios from "axios";
import { useRef, useState } from "react";
import "./SearchBar.css";

export default function SearchBar({setSelectedUsername}) {
    const [ search_results, setSearchResults ] = useState(null)
    const searchBarRef = useRef(null);

    const onSearchChange = async (e) => {
        const input = e.target.value;
        if (input !== ''){
            try{
                const uri = `${process.env.REACT_APP_API_URL}/api/search?username=${input}`;
                const data = (await (axios.get(uri, { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}}))).data;
                if (data.length <= 0)
                    setSearchResults(['Username not found'])
                
                else {
                    const filltered_data = data.filter((_, index) => index < 5);
                    setSearchResults(filltered_data.map(obj => obj.username));
                }
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
        <div id="search-bar-container">
            <input id="search-bar" onChange={onSearchChange} ref={searchBarRef} type="text" placeholder="Search using a username" />
            {search_results && 
                <div id="search-result-container">
                    {search_results.map(
                        (username, index) => <div className="search-result-item" key={index} onClick={() => selectUsername(username)}>{username}</div>
                    )}
                </div>
            }
        </div>
    )
}