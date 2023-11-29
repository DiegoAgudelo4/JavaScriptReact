import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Mensaje({titulo,mensaje,cerrar, confirmar}) {
  return (
    <>
    <div
        className="modal-backdrop show"
        style={{ opacity: 0.5, position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#000' }}
      ></div>
    <div
      className="modal show"
      style={{ display: 'block',
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',}}
    >
      
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{mensaje}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={()=>cerrar()}>Cancelar</Button>
          <Button variant="primary" onClick={()=>confirmar()}>Aceptar</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </>
  );
}

export default Mensaje;