import { useState } from "react";
import { Button, Form, FormControl, InputGroup, Modal } from "react-bootstrap";

export default function CustomModals({setMovie,length,id}) {
    const [show, setShow] = useState(false);

    const [title, setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [rate, setRate] = useState(0);
    const [img, setImg] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const saveMovie = () =>{
        setMovie({title,description,rate,imgUrl:img,category,date,_id:id+1})
        handleClose()
    }
    return (
      <>
        <Button variant="outline-primary" onClick={handleShow}>
          Add Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <InputGroup className="mb-3">
                <FormControl
                placeholder="Title"
                aria-label="Title"
                aria-describedby="basic-addon1"
                onChange={(e)=>setTitle(e.target.value)}
                />
            </InputGroup>
          <InputGroup className="mb-3">
          <Form.Control as="textarea" placeholder="Description" rows={3} 
          onChange={(e)=>setDescription(e.target.value)}
          />
            </InputGroup>
          <InputGroup className="mb-3">
                <FormControl
                placeholder="ImgUrl"
                aria-label="ImgUrl"
                aria-describedby="basic-addon1"
                onChange={(e)=>setImg(e.target.value)}
                />
            </InputGroup>
          <InputGroup className="mb-3">
                <FormControl
                placeholder="Rate"
                aria-label="Rate"
                aria-describedby="basic-addon1"
                type='number'
                onChange={(e)=>setRate(e.target.value)}
                />
            </InputGroup>
          <InputGroup className="mb-3">
                <FormControl
                placeholder="Date"
                aria-label="Date"
                aria-describedby="basic-addon1"
                type="date"
                onChange={(e)=>setDate(e.target.value)}
                />
            </InputGroup>
          <InputGroup className="mb-3">
                <FormControl
                placeholder="Category"
                aria-label="Category"
                aria-describedby="basic-addon1"
                onChange={(e)=>setCategory(e.target.value)}
                />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>saveMovie()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }