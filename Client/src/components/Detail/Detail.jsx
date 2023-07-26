import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



export default function Detail(){

    const {id}= useParams()

    const [pjDetail, setPjDetail] = useState({})
    
    
    useEffect(() => {
        axios(`http://localhost:3001/character/${id}`).then(({ data }) => {
           if (data.name) {
                setPjDetail(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
      //   return setPjDetail({});
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);

    return(
    <div>
              <h3>{pjDetail.name && pjDetail.name}</h3>
              <h5>{pjDetail.status && pjDetail.status}</h5>
              <img src={pjDetail.image} alt={pjDetail.name}/>
              <section>
                <span>Specie: {pjDetail.species}</span>
                <span>Gender: {pjDetail.gender}</span>
                <span>🌐{pjDetail.origin?.name}</span>
              </section>
          </div>
    )
}


//[] montaje
//[id] update
// () => reuturn => (){} desmontaje

// var aux = null
// // 

// var nuevo = aux || "esto"

// var nueva = aux && aux