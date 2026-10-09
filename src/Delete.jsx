import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteDiaryDataApi } from './service/allApi';
function Delete({ item, setDeleteStatus }) {
  const [show, setShow] = useState(false);
  console.log(item);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = async (id) => {
    const result = await deleteDiaryDataApi(id)
    if (result.status == 200) {
      alert(result.data)
      setTimeout(() => {
        handleClose()
      }, 1000);
      setDeleteStatus(result)
    } else {
      alert(`Something went wrong`)
    }
  }
  return (
    <>
      <button onClick={handleShow} className=' btn btn-danger'>🗑️</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: "cursive" }}>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontFamily: "cursive" }}>
          <h4>Do you want to Delete  </h4>
        </Modal.Body>
        <Modal.Footer style={{ fontFamily: "cursive" }}>

          <Button variant="danger" onClick={() => handleDelete(item?._id)}>
            Confirm
          </Button>
        </Modal.Footer>

      </Modal>

    </>
  )
}

export default Delete