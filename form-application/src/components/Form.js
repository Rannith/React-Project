import { React, Component, Fragment } from 'react'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            productData : [],
            isEdit : false,
            productIndex : ''
        }
    }

    handleDelete = (index) => {
        let productData = this.state.productData;
        productData.splice(index,1);
        this.setState({
            productData :productData
        })
        // console.log('in delete fun')
    }

    handleEdit = (index) => {
        let productData = this.state.productData[index];
        console.log(productData)
        this.refs.productName.value = productData.productName;
        this.refs.productId.value = productData.productId;
        this.refs.productAmount.value = productData.productAmount;
        this.refs.productQuantity.value = productData.productQuantity;

        this.setState({
            productData : productData,
            isEdit : true,
            productIndex : index
        })
        console.log('in Edit')
         
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let productData = this.state.productData;
        let productName = this.refs.productName.value;
        let productId = this.refs.productId.value;
        let productAmount = this.refs.productAmount.value;
        let productQuantity = this.refs.productQuantity.value;

        if(this.state.isEdit === false) {
            let newProduct = {
                "productName" : productName,
                "productId" : productId,
                "productAmount" : productAmount,
                "productQuantity" : productQuantity
            }
    
            productData.push(newProduct);
        } else {
            let productIndex = this.state.productIndex;
            console.log(productName);
            productData[productIndex].productName = productName;
            productData[productIndex].productId = productId;
            productData[productIndex].productAmount = productAmount;
            productData[productIndex].productQuantity = productQuantity;
            
        }

        this.setState({
            productData : productData,
            isEdit : false
        })

        this.refs.myForm.reset();

    }

    render() {

        let productData = Array.from(this.state.productData);

        return (
            <>
                <form ref="myForm">
                    <div>
                        <label>Product Name</label>
                        <input type='text' ref="productName" />
                    </div>
                    <div>
                        <label>Product ID</label>
                        <input type='number' ref="productId" min='0' />
                    </div>
                    <div>
                        <label>Amount</label>
                        <input type='number' ref="productAmount" min='0' />
                    </div>
                    <div>
                        <label>Quantity</label>
                        <input type='number' ref="productQuantity" min='0' />
                    </div>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Product Name</th>
                            <th>Product Id</th>
                            <th>Product Price</th>
                            <th>Number of Product</th>
                        </tr>
                    </thead>
                    {
                        productData.map((product,index) => <tr key={index}>
                            <td>{index+1}</td>
                            <td>{product.productName}</td>
                            <td>{product.productId}</td>
                            <td>{product.productAmount}</td>
                            <td>{product.productQuantity}</td>
                            <td>
                                <button onClick={() => this.handleDelete(index)}>Delete</button>
                            </td>
                            <td>
                                <button onClick={() => this.handleEdit(index)}>Edit</button>
                            </td>
                        </tr>)
                    }
                </table>
            </>
        )
    }
}

export default Form
 

// import React, { useState } from 'react'

// function Form() {

//     const[productname,setProductName] = useState('');
//     const[productid,setProductId] = useState('');
//     const[amount,setAmount] = useState('');
//     const[quantity,setQuantity] = useState('');
//     const[list,setList] = useState([]);

//     const handleSubmit = event => {
//         event.preventDefault();
//         const data = {productname,productid,amount,quantity}
//         if(productname && productid && amount && quantity){
//             setList((product) => [...product,data])
//             setProductName('')
//             setProductId('')
//             setAmount('')
//             setQuantity('')
//         }
//     }

//   return (
//     <form onSubmit={handleSubmit}>
    // <div>
    //   <label>Product Name</label>
    //   <input type='text' value={productname} onChange={(event) => setProductName(event.target.value)} />
    // </div>
    // <div>
    //     <label>Product ID</label>
    //     <input type='number' value={productid} onChange={(event) => setProductId(event.target.value)} />
    // </div>
    // <div>
    //     <label>Amount</label>
    //     <input type='number' value={amount} onChange={(event) => setAmount(event.target.value)} />
    // </div>
    // <div>
    //     <label>Quantity</label>
    //     <input type='number' value={quantity} onChange={(event) => setQuantity(event.target.value)} />
    // </div>
    // <button type='submit'>Submit</button>
    // <table>
    //     <tr>
    //         <th>Index</th>
    //         <th>Product Name</th>
    //         <th>Product Id</th>
    //         <th>Product Price</th>
    //         <th>Number of Product</th>
    //     </tr>
    //     {
    //         list.map((product,index) => <tr key={index}>
    //             <td>{index}</td>
    //             <td>{product.productname}</td>
    //             <td>{product.productid}</td>
    //             <td>{product.amount}</td>
    //             <td>{product.quantity}</td>
    //         </tr>)
    //     }
    // </table>
// </form>
//   )
// }

// export default Form     