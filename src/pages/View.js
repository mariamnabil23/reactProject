import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function View(){
    // we use detParams() to get certain parameter 'productID' and then use it
    let {productID} = useParams();
    const [product , setproduct] = useState([]);
    useEffect( ()=>{
        fetch(`http://localhost:9000/products/${productID}`)
        .then( (res)=>res.json())
        .then( (product)=>{setproduct(product)})
    },[])

    return(
        <>
        {product && <div>
            <h1>{product.id}</h1>
            <h2>{product.title}</h2>
            <h3>{product.description}</h3>
            <h4>{product.price}$</h4>
        </div>
        }
        </>
    )
}

export default View;