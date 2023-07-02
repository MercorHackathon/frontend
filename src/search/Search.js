import { useState } from "react"
import SearchBar from "./SearchBar"
import Graph from "./Graph";

export default function Search () {
    const [ selected_username, setSelectedUsername ] = useState(null);
    return (
        <>
            <SearchBar setSelectedUsername={setSelectedUsername} />
            {(selected_username != null) && <Graph username={selected_username} />}
            
        </>
    )
}