import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {Modal,Row,Col,Container} from 'react-bootstrap';
import ModalStyles from '../Styles/ModalStyles.css'

function Modalito( {items = []} ) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {items.title} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={8} className=" w-50">
              <div>
                <img src={items.image} className = 'w-100 '/>
                </div>
            </Col>
            <Col xs={6} md={6} className= "w-50" >
              {items.description}
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
            Clasificacion {items.rating.rate}
            </Col>
            <Col xs={6} md={4}>
              Stock Disponible {items.rating.count}
            </Col>
            <Col xs={6} md={4}>
              ${items.price}
            </Col>
          </Row>
        </Container>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalito;