import { Col, Row , Form ,Button} from 'react-bootstrap';
import './Formulario.css'; 

function Formulario({value, handleBusqueda, buscarEnSpotify}) {
    return (
        <Row className='my-2'>
            <Col >
            <Form onSubmit={buscarEnSpotify}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" name='key' value={value?.key} placeholder="Ingrese una palabra"  onChange={handleBusqueda}/>
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
     <Button type='submit' id='btnBuscar' >Buscar</Button>
    </Form>
            </Col>
        </Row>
    );
}

export default Formulario; 