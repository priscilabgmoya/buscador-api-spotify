import { useState } from 'react'
import './App.css'
import { Form ,Button} from 'react-bootstrap';
import { BuscarSpotify } from './API/buscadorSpotify';

function App() {
  const [palabra, setPalabra] = useState({}); 
  const [resultados, setResultados] = useState([])
const handleBusqueda= (e) => {
  setPalabra({...palabra , [e.target.name] : e.target.value})
}

const buscarEnSpotify = async (e) => {
  if(!palabra.key &&  !palabra.type) return alert("Ingrese una palabra y un tipo de busqueda !"); 
  e.preventDefault(); 
  let res = await BuscarSpotify(palabra.key, palabra.tipo);
  setResultados(res); 
}
  return (
    <>
    <h1>API de Spotify</h1>
    <Form onSubmit={buscarEnSpotify}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" name='key' value={palabra?.key} placeholder="Ingrese una palabra"  onChange={handleBusqueda}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Select name='tipo' aria-label="Default select example" onChange={handleBusqueda}>
      <option value="">seleccione un tipo de busqueda</option>
      <option value="albums">albums</option>
      <option value="artists">artists</option>
      <option value="episodes">episodes</option>
      <option value="genres">genres</option>
      <option value="playlists">playlists</option>
      <option value="podcasts">podcasts</option>
      <option value="tracks">tracks</option>
      <option value="users">users</option>
    </Form.Select>
      </Form.Group>
     <Button type='submit' >Buscar</Button>
    </Form>
    {
      resultados?.map((cancion, index) => {
        return <div key={index}>
          <div>
            <img src={cancion.data.albumOfTrack.coverArt.sources[0].url} alt="" />
          </div>
        </div>
      }) 
    }
    </>
  )
}

export default App
