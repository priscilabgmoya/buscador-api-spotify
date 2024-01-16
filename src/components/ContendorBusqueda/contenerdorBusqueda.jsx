import { Row } from "react-bootstrap";
import './ContenedorBusqueda.css'; 
function ContenedorBusqueda({resultado}) {
    return(
            <Row className="m-2">
              <textarea name="textArea" id="textAreaRes" role="contenedorRes" cols="30" rows="16" value={resultado}></textarea>
           </Row>   
    ); 
}

export default ContenedorBusqueda;