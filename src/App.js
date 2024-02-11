import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Button, Modal, Form} from 'react-bootstrap';
import { getValue } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true)

  const [FormData, setFromData] = useState([{}])

  const getValue = (e) =>{
    let input = e.target;
    // console.log(input);
    let prop = input.name;
    let value = "";
    if(input.type == "file"){
      // console.log(input.files[0]);
      value = input.files[0].name;
    }else{
      // console.log(input.value);
      value = input.value;
      // document.getElementById('abc').innerHTML = val;
    }
    //  console.log(value);
    return setFromData((old)=>{
      return{
        ...old,
        [prop] : value
    }
    })
   
  }

  function getData(e){
    e.preventDefault()
    console.log(FormData);
  }

   

  return (
      <>
         <Container>
           <Button className='mt-4 fw-bold' variant='success' onClick={()=>setShow(true)}>
             <i className='fa fa-plus'></i> Add User
           </Button>
              <h1 id='abc'></h1>
           <Modal show={show}>
                <Modal.Header closeButton onClick={()=>setShow(false)}>
                   <Modal.Title>
                      <h1>User Registration</h1>
                   </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     <Form onSubmit={getData}>
                        {/* <input type='text' name='name' placeholder='Type Your Name here' className='Form.Control' /> */}
                        <Form.Group>
                        <Form.Label>Full Name</Form.Label>                        
                        <Form.Control type='text' name='name' placeholder='Type Your Name Here' onChange={getValue} />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Email</Form.Label>                        
                        <Form.Control type='email' name='email' placeholder='Type Your Email Here' onChange={getValue}  />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Password</Form.Label>                        
                        <Form.Control type='password' name='password' placeholder='Type Your Password Here' onChange={getValue}  />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Mobile Number</Form.Label>                        
                        <Form.Control type='tel' name='mobile' placeholder='Type Your Mobile Number Here' onChange={getValue} />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label>Profile Picture</Form.Label>                        
                        <Form.Control type='file' name='dp' placeholder='Upload a picture for DP' onChange={getValue} />
                        </Form.Group>
                        <Form.Group className='mt-2'>
                        <Button type='submit'>Submit</Button>
                        </Form.Group>
                     </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={()=>setShow(false)}>
                      close <i className='fa fa-close'></i>
                    </Button>
                </Modal.Footer>
           </Modal>
         </Container>
      </>
  );
}

export default App;
