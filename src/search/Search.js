import { useState } from "react"
import SearchBar from "./search-bar/SearchBar"
import LineChart from "./line-chart/LineChart";

export default function Search () {
    const [ selected_username, setSelectedUsername ] = useState(null);
    return (
        <>
            <SearchBar id="search-bar" setSelectedUsername={setSelectedUsername} />
            {(selected_username != null) && 
            <>
                <LineChart username={selected_username} />
            </>
            }
            
        </>
    )
}