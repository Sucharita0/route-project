import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function ShoppingHome()
{
    const[categories,setCategories] = useState([]);

       useEffect(()=>{
        axios({
            method:'get',
            url: "http://fakestoreapi.com/products/categories",
        })
            .then((response)=>{
                setCategories(response.data);
            })
       },[]);
    return(
        <div>
            <h2>Shopping Home</h2>
                <ol>
                    {
                        categories.map(category=>
                            <li key={category}>
                                <Link to={`/products/${category}`} >{category}</Link>
                            </li>
                        )
                    }
                </ol>
        </div>
    )
}