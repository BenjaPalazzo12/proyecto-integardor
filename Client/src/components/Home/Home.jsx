import React from "react";
import Cards from  '../Cards/Container/Cards'

export default function Hone(props){
    

    return <div>
        <span>Home</span>
        <Cards characters={props.characters} onClose={props.onClose} />
    </div>
}