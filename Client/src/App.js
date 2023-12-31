import './App.css';
// import Cards from './components/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useEffect, useState} from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Home from './components/Home/Home'
import About from './components/About/About';
import Form from './components/Forms/Form';
import Detail from './components/Detail/Detail';
import Favorites from './components/Favorites/Favorites';

function App() {

   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate()
   const [access, setAccess] = useState(false);

   async function login(userData) {
   const { email, password } = userData;
   const URL = 'http://localhost:3001/user/login/';
   // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
   //    const { access } = data;
   //    setAccess(data);
   //    access && navigate('/home');
   // });
   try {
     const {data} =  await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;
      setAccess(data);
      access && navigate('/home')
   } catch (error) {
      alert('Usuario invalido')
   }
}

   useEffect(()=> {
      !access && navigate('/')
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [access])

   const onSearch = async (id) => {
      // await axios(`http://localhost:3001/character/${id}`)  // usamos axios para buscar los personajes de la api
      // .then(({ data }) => {
      //    if (data.name) {    // se valida si la data que se recibe de axios tiene una prop llamada name
      //       setCharacters((oldChars) => [...oldChars, data]); // si es asi, concatena a los characters viejos con el que saco por el id de la api
      //    } else {
      //       window.alert('¡No hay personajes con este ID!'); // si colocamos un id que no corresponde, devuelve una alerta!
      //    }
      // });
      try {
         const {data} = await axios(`http://localhost:3001/character/${id}`)
         if(data.name){
            setCharacters((oldChars) => [...oldChars, data]);
         } 
      } catch (error) {
         window.alert('¡No hay personajes con este ID!');
      }
   }
   
function onClose(id){


   setCharacters(
      characters.filter(pj => {
      return pj.id !== id
   })
   )
}
   const location = useLocation();

   return (
      <div className='App'>
         {
            location.pathname !== "/" && <Nav onSearch={onSearch}/>
         }    
         <hr />
         <Routes>
            <Route path='/' element={<Form login={login}/>} />\
            <Route path='/home' element={<Home characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/detail/:id'element={<h1>{<Detail/>}</h1>}></Route>
            <Route path='/favorites'element={<Favorites/>}></Route>
         </Routes>
      </div>
   );
}

export default App;
// // {/* <Nav onSearch={onSearch}/>
//          */