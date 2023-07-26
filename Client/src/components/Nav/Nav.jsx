import SearchBar from './SearchBar/SearchBar'
import { Link } from 'react-router-dom';
import styles from './Nav.module.css'

const Nav = ({ onSearch }) => {
    return(
        <nav className= {styles.Nav}>
            <Link to='/abaout'>ABOUT</Link>
            <Link to='/home'>HOME</Link>
            <Link to='/favorites'>FAVS❤️</Link>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}

export default Nav;