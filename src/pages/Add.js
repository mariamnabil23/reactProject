import { useState } from "react";
import axios from "axios";

function Add(){

    const[title , setTitle] = useState('');
    const[price , setPrice] = useState(0);

    const formSubmit=(e)=>{
        // to stop refreash
        e.preventDefault()
        //to add this new title,price to the products
        axios.post('http://localhost:9000/products' , {
            title,
            price
        })
        .then( (data)=>{console.log(data)})

        // fetch('http://localhost:9000/products' , {
        //     method: "POST",
        //     body: JSON.stringify({
        //         title,
        //         price
        //     })
        //     .then( ()=>{})
        // })
        // .then( (res)=>res.json())
        // .then( ()=>{})
    };

    return(
        <>
            <h1>add product</h1>

            <form onSubmit={formSubmit}>
                <div className="mb-3">
                    <label htmlFor="productTitle" className="form-label">Title</label>
                    <input type="text" className="form-control" id="productTitle" aria-describedby="product title" placeholder="product title" onChange={ (e)=>{setTitle(e.target.value)}}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">Price</label>
                    <input type="number" className="form-control" id="productPrice" aria-describedby="product price" placeholder="product price" onChange={ (e)=>{setPrice(e.target.value)}}/>
                </div>


                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Are You Sure</label>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </>
    )
}

export default Add;