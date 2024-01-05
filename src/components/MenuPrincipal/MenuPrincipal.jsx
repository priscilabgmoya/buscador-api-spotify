import { Container, Row } from "react-bootstrap";
import {BsSpotify} from 'react-icons/bs'; 
import { useState } from 'react'
import { BuscarSpotify } from '../../API/buscadorSpotify';
import Formulario from "../Formulario/Formulario";
import ContenedorBusqueda from "../ContendorBusqueda/contenerdorBusqueda";
function MenuPrincipal() {
    const [palabra, setPalabra] = useState({}); 
    const [resultados, setResultados] = useState([])
  const handleBusqueda= (e) => {
    setPalabra({...palabra , [e.target.name] : e.target.value})
  }
  
  const buscarEnSpotify = async (e) => {
    if(!palabra.key &&  !palabra.type) return alert("Ingrese una palabra y un tipo de busqueda !"); 
    e.preventDefault(); 
    let res = await BuscarSpotify(palabra.key, palabra.tipo);
    setResultados( JSON.stringify(res)); 
  }
    return(
        <Container>
            <Row className="my-2">
            <h1>< BsSpotify className='logoSpotify'/> API de Spotify</h1>
            </Row>
            <Formulario value={palabra} handleBusqueda={handleBusqueda} buscarEnSpotify={buscarEnSpotify} />
       <ContenedorBusqueda resultado={resultados}/> 
        </Container>
    ); 
}

export default MenuPrincipal