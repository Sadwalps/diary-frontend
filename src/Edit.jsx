import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Edit() {
     const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <button onClick={handleShow} className=' btn btn-primary'>✏️</button>
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontFamily:"cursive"}}>Edit Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{fontFamily:"cursive"}}>
            <input className='form-control ' type="text" placeholder='Title'  />
                        <textarea  className='form-control mt-2' name="" id="" placeholder='Description'></textarea>
                        <input className='form-control mt-2' type="date" placeholder='Select Date'/>
        </Modal.Body>
        <Modal.Footer style={{fontFamily:"cursive"}}>
          <Button  variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button  variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit