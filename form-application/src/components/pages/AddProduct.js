import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormGroup, Label, Input,Button, Form } from 'reactstrap';
import { Link } from 'react-router-dom';

function AddUser() {
  return (
    <div className='addUser'>
      <h5>ADD NEW PRODUCT</h5>
      <Form>
          <FormGroup>
              <Label for="productName">Product Name</Label>
              <Input type="text" placeholder="Product Name" />
          </FormGroup>
          <FormGroup>
              <Label for="productName">Product Id</Label>
              <Input type="text" placeholder="Product Id" />
          </FormGroup>
          <FormGroup>
              <Label for="productName">Price</Label>
              <Input type="text" placeholder="Price" />
          </FormGroup>
          <FormGroup>
              <Label for="productName">Quantity</Label>
              <Input type="text" placeholder="Quantity" />
          </FormGroup>
          <Button type='submit'>Submit</Button>
          <Link to='/' className="btn btn-danger " >Cancel</Link>
      </Form>
  </div >
  )
}

export default AddUser
