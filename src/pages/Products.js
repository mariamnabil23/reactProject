import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import './Products.css';
import Swal from 'sweetalert2'

function Products(){

    const api_url = 'http://localhost:9000/products';
    // we use useState() to set products and display it 
    const [products , setproducts] = useState([]);
    // we use useEffect() to get products
    useEffect( ()=>{
        getProducts()
    },[]);

    const getProducts = ()=>{
        fetch(api_url)
        .then((res)=>res.json())
        .then((data)=>{setproducts(data)})
    }

    const deleteProduct = (product)=>{
        Swal.fire({
            title: `Do You Want To Delete Product ${product.id} ?`,
            showCancelButton: true
        }).then( (data)=>{
            if(data.isConfirmed){
                fetch(`${api_url}/${product.id}` , {method: "DELETE"})
            .then( (res)=>res.json())
            .then( (data)=>{getProducts()})
            }
        })
    
    };

    return(
        <>
        <h1>PRODUCTS PAGE</h1>

        {/* this btn make make routing to this products page and go to add page */}
        <Link to={'/products/add'} className="btn btn-primary btn-sm mt-3">Add New Product</Link>

        <table className="table table-striped mt-3 products-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody>
                {/* maping products to display it seqentially like arraing */}
                {products.map( (product)=>{
                    return(
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.description.slice(0,30)}...</td>
                            <td>{product.price}$</td>
                            <td>
                                <Link to={`/products/${product.id}`} className="btn btn-info btn-sm">View</Link>
                                {/* <button className="btn btn-success btn-sm">Edit</button> */}
                                <button className="btn btn-danger btn-sm" onClick={()=>{deleteProduct(product)}}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>

        </>
    )
}

export default Products;