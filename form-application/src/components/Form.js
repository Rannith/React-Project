import React, { useState } from 'react'

function Form() {

    const[productname,setProductName] = useState('');
    const[productid,setProductId] = useState('');
    const[amount,setAmount] = useState('');
    const[quantity,setQuantity] = useState('');
    const[list,setList] = useState([]);

    const handleSubmit = event => {
        event.preventDefault();
        const data = {productname,productid,amount,quantity}
        if(productname && productid && amount && quantity){
            setList((product) => [...product,data])
            setProductName('')
            setProductId('')
            setAmount('')
            setQuantity('')
        }
    }

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label>Product Name</label>
      <input type='text' value={productname} onChange={(event) => setProductName(event.target.value)} />
    </div>
    <div>
        <label>Product ID</label>
        <input type='number' value={productid} onChange={(event) => setProductId(event.target.value)} />
    </div>
    <div>
        <label>Amount</label>
        <input type='number' value={amount} onChange={(event) => setAmount(event.target.value)} />
    </div>
    <div>
        <label>Quantity</label>
        <input type='number' value={quantity} onChange={(event) => setQuantity(event.target.value)} />
    </div>
    <button type='submit'>Submit</button>
    <table>
        <tr>
            <th>Index</th>
            <th>Product Name</th>
            <th>Product Id</th>
            <th>Product Price</th>
            <th>Number of Product</th>
        </tr>
        {
            list.map((product,index) => <tr key={index}>
                <td>{index}</td>
                <td>{product.productname}</td>
                <td>{product.productid}</td>
                <td>{product.amount}</td>
                <td>{product.quantity}</td>
            </tr>)
        }
    </table>
</form>
  )
}

export default Form     