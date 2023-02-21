import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal, Row, Col, Container } from 'react-bootstrap';
import StarRating from "./StarRating";
import "../Styles/ModalStyles.css";

function Modalito({ items = [] }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




return (
  <>
    <div className='w-100 h-100 d-flex justify-content-around align-content-around flex-wrap linkeado ' onClick={handleShow}>
      Ver Mas!!
    </div>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> {items.title} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className='d-flex align-items-center ' >
            <Col xs={12} md={8} className=" w-50">
              <div>
                <img src={items.image} className='w-75' />
              </div>
            </Col>
            <Col xs={6} md={6} className="d-flex align-content-center w-50 aveeltexto" >
              {items.description}
            </Col>
          </Row>

          <Row className='d-flex align-items-center justify-content-center  '>
          

            <Col xs={6} md={4} className="d-flex justify-content-around align-items-center flex-wrap w-50">
              Stock Disponible 
              <div className='d-flex justify-content-around align-items-center' >{items.rating.count}</div>
            </Col>

            <Col xs={6} md={4} className="d-flex justify-content-between align-items-center flex-wrap textprice w-50">
              Price
              <div >U$D  {items.price}</div>
            </Col>

            <Col xs={6} md={4} className="d-flex justify-content-around align-items-center w-100" >
            <StarRating stars={items.rating.rate}/>
            </Col>
            
          </Row>
        </Container>

      </Modal.Body>
      <Modal.Footer className='flex-nowrap'>
        <Button variant="secondary" onClick={handleClose}  className="w-25" >
          Close
        </Button>
        <Button variant="primary" onClick={handleClose} className="w-75">
          Add to Cart
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
}

export default Modalito;