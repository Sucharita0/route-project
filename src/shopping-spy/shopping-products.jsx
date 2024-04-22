import axios from "axios";
import { useEffect, useState } from "react"
import { Link, Route, Routes, useParams } from "react-router-dom";
import { ShoppingDetails } from "./shopping-details";

export function ShoppingProducts()
{
    const[products, setProducts] = useState([]);
        const params = useParams();
        useEffect(()=>{
            axios({
               method:'get',
               url: `http://fakestoreapi.com/products/category/${params.catName}`
            })
            .then((response)=>{
                setProducts(response.data);
            })
        },[]);
    return(
        <div>
            <h2>products</h2>
            <div className="row">
                <div className="col-6">
                    <ol>
                        {
                            products.map(product=>
                                <li key={product.id}>
                                    <Link to={`details/${product.id}`}>{product.title}</Link>
                                </li>
                            )
                        }
                    </ol>
                </div>

                <div className="col-6">
                        <Routes>
                            <Route path="details/:prodId" element={<ShoppingDetails/>} />
                        </Routes>
                </div>
            </div>
                
                <p><Link to="/home">Back to categories</Link></p>
        </div>
    )
}