import axios from "axios";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom"


export function ShoppingDetails()
{
    const params = useParams();
    const[product, setProduct] = useState({id:0, title:'',image:'',price:0, category:'',description:'',rating:{rate:0,count:0}});

        useEffect(()=>{
            axios({
                method:'get',
                url: `http://fakestoreapi.com/products/${params.prodId}`
            })
            .then(response=>{
                setProduct(response.data);
            })
        },[params.prodId]);
    return(
        <div>
            <h2>Shopping Details</h2>
            <dl>
                <dt>preview</dt>
                <dd>
                    <img src={product.image} width="200" height="200"/>
                </dd>
                <dt>
                    price
                </dt>
                <dd>{product.price}</dd>
                <dt>Rating</dt>
                <dd>{product.rating.rate}[{product.rating.count}]</dd>
            </dl>
            
               
        </div>
    )
}