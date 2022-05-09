import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function ProductList() {
  return (
    // <ListGroup>
    //     <ListGroupItem className='d-flex'>
    //         <strong>Pen</strong>
    //         {/* <strong>1</strong>
    //         <strong>5.00</strong>
    //         <strong>10</strong> */}
    //         <div className='ml-auto'>
    //             <Link className='btn btn-warning mr-1' to='/editproduct'>Edit</Link>
    //             <Button color='danger'>Delete</Button>
    //         </div>
    //     </ListGroupItem>
    // </ListGroup>
    <table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">Product Id</th>
      <th scope="col">Product Name</th>
      <th scope="col">Price/Product</th>
      <th scope="col">Quantity</th>
      <th scope='col'>Edit</th>
      <th scope='col'>Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Pen</td>
      <td>5</td>
      <td>10</td>
      <td><Link className='btn btn-warning mr-1' to='/editproduct'>Edit</Link></td>
      <td><button className='btn btn-danger'>Delete</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Shirt</td>
      <td>1500</td>
      <td>2</td>
      <td><Link className='btn btn-warning mr-1' to='/editproduct'>Edit</Link></td>
      <td><button className='btn btn-danger'>Delete</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Watch</td>
      <td>500</td>
      <td>5</td>
      <td><Link className='btn btn-warning mr-1' to='/editproduct'>Edit</Link></td>
      <td><button className='btn btn-danger'>Delete</button></td>
    </tr>
  </tbody>
</table>
  )
}

export default ProductList
