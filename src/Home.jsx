import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Edit from './Edit';
import Delete from './Delete';
import { addDiaryDataApi } from './service/allApi';
function Home() {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Click here to add
        </Tooltip>
    );
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        handleCancel()
    }
    const handleShow = () => setShow(true);
    const [diaryData, setDiaryData] = useState({
        title: "",
        description: "",
        date: ""
    })
    console.log(diaryData);

    const handleAdd = async () => {
        const { title, description, date } = diaryData
        console.log(title, description, date);
        if (!title || !description || !date) {

            alert(`Fill the form completely`)
        } else {
            const reqBody = new FormData()
            reqBody.append('title', title)
            reqBody.append('description', description)
            reqBody.append('date', date)
            const result = await addDiaryDataApi(reqBody)
            if (result.status == 200) {
                alert(`Diary Successfully added`)
                setTimeout(() => {
                    handleClose()
                }, 1000)
            } else if (result.status == 406) {
                alert(`You already added diary on this day`)
            } else {
                alert(`Something went wrong`)
            }
        }
    }

    const handleCancel = () => {
        setDiaryData({
            title: "",
            description: "",
            date: ""
        })
    }

    return (
        <>
            {/* Navbar */}
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://static.vecteezy.com/system/resources/previews/026/221/959/non_2x/book-icon-symbol-design-illustration-vector.jpg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}

                    </Navbar.Brand>
                    <h2 style={{ fontFamily: "cursive" }} className='text-dark'>Diary</h2>
                </Container>
            </Navbar>
            {/* Hero section */}
            <div className='container-fluid d-flex justify-content-center align-items-center' id='herosection'>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 200, hide: 200 }}
                    overlay={renderTooltip}
                >
                    <button className='btn addbtn' onClick={handleShow}>
                        <img src="https://static.vecteezy.com/system/resources/previews/047/934/404/non_2x/conceptual-flat-design-icon-of-notebook-vector.jpg" alt="" />
                    </button>
                </OverlayTrigger>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ fontFamily: "cursive" }}>Add Your Notes</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ fontFamily: "cursive" }}>
                        <input value={diaryData.title} onChange={(e) => setDiaryData({ ...diaryData, title: e.target.value })} className='form-control ' type="text" placeholder='Title' />
                        <textarea value={diaryData.description} onChange={(e) => setDiaryData({ ...diaryData, description: e.target.value })} className='form-control mt-2' name="" id="" placeholder='Description' ></textarea>
                        <input value={diaryData.date} onChange={(e) => setDiaryData({ ...diaryData, date: e.target.value })} className='form-control mt-2' type="date" placeholder='Select Date' />
                    </Modal.Body>
                    <Modal.Footer style={{ fontFamily: "cursive" }}>
                        <Button variant="secondary" onClick={handleCancel}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleAdd}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
            {/* Body section */}
            <div className='py-4'>
                <h2 className='mt-lg-4 mt-2 text-center'>All Notes</h2>

                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                            <Card className='mt-lg-3 mt-2'>
                                <Card.Body className=''>
                                    <div className='d-flex justify-content-between w-100'>
                                        <Edit />
                                        <h3 style={{ fontFamily: "cursive" }}>text</h3>
                                        <Delete />
                                    </div>
                                    <h4 className='mt-2' style={{ fontFamily: "cursive" }}>Date:52391823</h4>
                                    <h5 style={{ fontFamily: "cursive" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ex debitis, quia quam temporibus expedita esse sapiente quos omnis, possimus nesciunt reiciendis cumque labore, veniam quod dignissimos inventore voluptas eaque saepe voluptatibus corporis perferendis! Qui ab, non tempora perferendis ad dolorem similique. Accusantium maiores placeat at hic minima? Nesciunt error amet fugiat necessitatibus? Doloremque quae exercitationem dolorum ipsa architecto reiciendis voluptas sed. Reiciendis deleniti voluptatem aperiam sunt necessitatibus aut tenetur quisquam sapiente, porro eum eos fuga dolor repudiandae esse sint, repellendus nobis iure itaque, fugiat molestiae! Architecto ipsum animi dicta porro atque! Numquam cupiditate explicabo ex, voluptas deserunt incidunt eaque!</h5>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-1"></div>
                    </div>

                </div>

            </div>

            {/* footer */}
            <div className='container-fluid bg-light py-4 text-dark' style={{ fontFamily: "cursive" }}>
                <marquee behavior="" direction=""><h4>"A quiet space for your loudest thoughts, deepest dreams, and daily moments."</h4></marquee>
            </div>

        </>
    )
}

export default Home