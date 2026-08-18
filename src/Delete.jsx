import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Delete() {
     const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  return (
    <>
     <button onClick={handleShow} className=' btn btn-danger'>🗑️</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontFamily:"cursive"}}>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{fontFamily:"cursive"}}>
           <h4>Do you want to Delete  </h4>
        </Modal.Body>
        <Modal.Footer style={{fontFamily:"cursive"}}>
         
          <Button  variant="danger" onClick={handleClose}>
           Confirm
          </Button>
        </Modal.Footer>
        
      </Modal>

    </>
  )
}

export default Delete