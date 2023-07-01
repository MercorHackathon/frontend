import axios from "axios";
import { useState } from "react";


export default function Search() {
    const [ search_results, setSearchResults ] = useState(null)

    const onSearchChange = async (e) => {
        const input = e.target.value;
        if (input !== ''){
            try{
                const uri = `${process.env.REACT_APP_BACKEND_URI}/api/search?username=${input}`;
                const data = (await (axios.get(uri))).data;
                if (data === [])
                    setSearchResults(['Username not found'])
                else
                    setSearchResults(data);
            }
            catch(err) {
                console.error(err);
                setSearchResults(['An error occured']);
            }
        }
        else
            setSearchResults(null);
    }
    return (
        <div>
            <input onChange={onSearchChange} type="text" placeholder="Search using a username" />
            {search_results && <div id="search-results">{search_results.map((result, index) => <div key={index}>{result}</div>)}</div>}
        </div>
    )
}