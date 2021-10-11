import React, { useState } from "react";

export default function Search(props) {
    const [searchTerm, setSearchTerm] = useState("");
    return (<div>
        <h4> Search Post </h4>
        <input
          value={searchTerm}
          onChange={(event) =>{
              setSearchTerm(event.target.value);
          }} 
          placeholder="Search Here"/>
    </div>)
}