import React from "react";
// import style from "styled-components";
import { useState } from "react";
import style from './SearchBar.module.css'


export default function SearchBar({onSearch}) {

   const [id, SetId] = useState('');

   const handleChange = (event) =>{
      SetId(event.target.value)
   }

   
   return (
      <div>
         <input className={style.input}type='search' onChange={handleChange} value={id} />
         <button className={style.container}  onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
