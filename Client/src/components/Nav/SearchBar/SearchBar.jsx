import React from "react";
// import style from "styled-components";
import { useState } from "react";


const botonStyle = {
   color: '#1cc49d',
   backgrounColor: '#1b2f31',
   borderRadius: '50px',
   justifyContent: 'center',
   alignItems: 'center',
   height: '30px',
   width: '90px',
   fontSize: 'large',
   fontWeight: '600',
}
export default function SearchBar({onSearch}) {

   const [id, SetId] = useState('');

   const handleChange = (event) =>{
      SetId(event.target.value)
   }

   
   return (
      <div>
         <input type='search' onChange={handleChange} value={id} />
         <button style={botonStyle}  onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
