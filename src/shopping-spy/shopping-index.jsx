import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShoppingHome } from "./shopping-home";
import { ShoppingProducts } from "./shopping-products";
import { ShoppingDetails } from "./shopping-details";


export function ShoppingIndex()
{
    return(
        <div className="container-fluid">

            <BrowserRouter>

            <header className="d-flex justify-content-between p-2 mt-2 bg-dark text-white">
                <div>Shopper</div>
                <div>
                    <span className="me-2">Home</span>
                    <span className="me-2">Electronics</span>
                    <span className="me-2">Jewelery</span>
                    <span className="me-2">Men's clothes</span>
                    <span className="me-2">women's clothes</span>
                </div>
                <div>
                    <span className="bi bi-person me-2"></span>
                    <span className="bi bi-heart me-2"></span>
                    <span className="bi bi-search me-2"></span>
                    <span className="bi bi-cart me-2"></span>
                </div>
            </header>
        
        
               
                <section className="mt-3 overflow-auto" style={{height:'500px'}}>
                    <Routes>
                        
                            <Route path="/" element={<ShoppingHome/>} />
                            <Route path="home" element={<ShoppingHome/>} />
                            <Route path="products/:catName" element={<ShoppingProducts/>} >
                            <Route path="details/:prodId" element={<ShoppingDetails/>} />
                            
                            
                        </Route>
                        <Route path="*" element={<h2>Not found</h2>}/>
                    </Routes>
                </section>

                </BrowserRouter>
        </div>
    )
}