import Card from '../Singular/Card';
import style from 'styled-components';
// import container from './Cards.module.css'

const DivConEstilos = style.div`
   display: flex;
   flex-direction: column;
   alingn-items: center;
`


export default function Cards(props) {
   return <DivConEstilos>
      {
         props.characters.map((character) => { // aca recorremos el array character para encontrar sus props
            return <Card 
            key={character.id} // aca buscamos el id del character
            id= {character.id}
            name={character.name}// aca buscamos el nombre del character
            status={character.status}// aca buscamos el estado del character
            origin={character.origin.name}// aca buscamos el origen del character
            species={character.species}// aca buscamos la especie del character
            gender={character.gender}// aca buscamos el genero del character
            image={character.image}// aca buscamos la imagen del character
            onClose={props.onClose} // aca cerramos la card 
            /> 
         })
      }
   </DivConEstilos>; 
}
