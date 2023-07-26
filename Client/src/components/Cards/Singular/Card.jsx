import React,{useState, useEffect} from 'react';
// import style from './Card.Module.css'
import style from 'styled-components';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { addFavorites, deleteFavorites } from '../../../redux/actions/actions';

const DivConEstilos = style.div` 
   background-color: #62A580;
   border-radius: 30px;
   color: #FFFFFF;
   margin: 5px;
   width: 20%;
   &:hover {
      background-color: grey ;
   }
` 

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
const h2Style = {
   backgrounColor: "#00FF5D",
   borderRadius: '50px'
}

function Card({id, name, onClose, species,gender, status, origin, image, removeFavorites, addFavorite, favorites}) { // aca hacemos destructuring para separar las caracteristicas de los characters (tambien podria ser props )
 
   // const objImg =  {
   //    width: "40px",
   //    height: "40px"
   //   }
   const [isFav, setIsFav] = useState(false)
   
   function handleClick(){
      if(isFav){
         setIsFav(false)
         removeFavorites(id)
      }else{
         setIsFav(true)
         addFavorite({id, name, onClose, species,gender, status, origin, image})
      }
   }

   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [favorites]);

   return (
      <DivConEstilos>
         {
            onClose? <button style={botonStyle} onClick={() => onClose(id)}>
               CERRAR
            </button> : null
         }
         <h2 style={h2Style}>{name}</h2>    
         <h2>{species}</h2>   
         <h2>{gender}</h2> 
         <h2>{status}</h2>
         <h2>{origin}</h2>
         <Link to={`/detail/${id}` }>
            <img src={image} alt={name} />
         </Link>
         {isFav ? (
            <button onClick={handleClick}>❤️</button>
         ) : (
            <button onClick={handleClick}>🤍</button>
         )
         }
      </DivConEstilos>  
       // en las lineas de arriba (desde la 5 a la 7) se buscan las props de los characters 
       // la prop onClose de la linea 4 tambien la buscamos desde la app 
   );
}

export function mapDispatchToProps(dispatch){
   return {
      addFavorite: function(character){
         const objAction = addFavorites(character)
         dispatch(objAction)
         //dispatch(addFavorites(character)) se puede hacer tambien
      },
      removeFavorites: function(id){
         dispatch(deleteFavorites(id))
      }
   }
}

export function mapStateToProps(globalState){
   return {
      favorites: globalState.favorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)