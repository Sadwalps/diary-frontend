import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editDiaryDataApi } from './service/allApi';
function Edit({ item, setEditStatus }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editData, setEditData] = useState({
    title: item?.title,
    description: item?.description,
    date: item?.date
  })
  console.log(editData);

  const handleCancel = () => {
    setEditData({
      title: item?.title,
      description: item?.description,
      date: item?.date
    })
  }

  const handleSave = async () => {
    const { title, description, date } = editData
    console.log(title, description, date);
    if (!title || !description || !date) {
      alert(`Fill the form completely`)
    } else {
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("description", description)
      reqBody.append("date", date)
      const result = await editDiaryDataApi(item?._id, reqBody)
      if (result.status == 200) {
        alert(`Diary successfully edited`)
        setEditStatus(result)
        setTimeout(() => {
          handleClose()
        }, 1000)
      } else {
        alert(`Something went wrong`)
      }
    }
  }

  return (
    <>
      <button onClick={handleShow} className=' btn btn-primary'>✏️</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: "cursive" }}>Edit Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontFamily: "cursive" }}>
          <input value={editData.title} onChange={(e) => setEditData({ ...editData, title: e.target.value })} className='form-control ' type="text" placeholder='Title' />
          <textarea value={editData.description} onChange={(e) => setEditData({ ...editData, description: e.target.value })} className='form-control mt-2' name="" id="" placeholder='Description'></textarea>
          <input value={editData.date} onChange={(e) => setEditData({ ...editData, date: e.target.value })} className='form-control mt-2' type="date" placeholder='Select Date' />
        </Modal.Body>
        <Modal.Footer style={{ fontFamily: "cursive" }}>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit