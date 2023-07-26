import { connect } from "react-redux"
import style from "./Favorites.module.css"
import Card from "../Cards/Singular/Card"

function Favorites(props){
    return <div className={style.container}>
        {props.favorites?.map((pj) => (
            <Card key={pj.id} // aca buscamos el id del character
            id= {pj.id}
            name={pj.name}// aca buscamos el nombre del character
            status={pj.status}// aca buscamos el estado del character
            origin={pj.origin}// aca buscamos el origen del character
            species={pj.species}// aca buscamos la especie del character
            gender={pj.gender}// aca buscamos el genero del character
            image={pj.image}// aca buscamos la imagen del character
            />
        ))}
    </div>
}
export function mapStateToProps(state){
    return{
        favorites: state.favorites
    }
}
export default connect(mapStateToProps)(Favorites)