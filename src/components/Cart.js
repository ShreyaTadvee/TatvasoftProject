import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Search from "./Search";

function Cart() {
    return (
        <>
            <Navbar />
            <Search />
            <div className="text-center">
                <h2>Cart Page</h2>
            </div>
            <div className="container" style={{ width: "600px" }}>
                <b>My Shopping Bag(3 items)</b>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="..." className="img-fluid rounded-start" alt="..."   />
                        
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Campus Sutra</h5>
                                <p className="card-text"><small className="text-muted">Cart item name</small></p>
                                <a className="nav-link" aria-current="page" href="#">
                                <ul class="pagination">
                       <li class="page-item disabled">
                     <a class="page-link">+</a>
                   </li>
                   <li class="page-item"><a class="page-link" href="#">1</a></li>
    
                   <li class="page-item">
                  <a class="page-link" href="#">-</a>
                     </li>
                   </ul>
                                    Remove
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Campus Sutra</h5>
                                    <p className="card-text"><small className="text-muted">Cart item name</small></p>
                                    <ul class="pagination">
                       <li class="page-item disabled">
                     <a class="page-link">+</a>
                   </li>
                   <li class="page-item"><a class="page-link" href="#">1</a></li>
    
                   <li class="page-item">
                  <a class="page-link" href="#">-</a>
                     </li>
                   </ul>
                                    <a className="nav-link" aria-current="page" href="#">
                                    Remove
                                </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Campus Sutra</h5>
                                    <p className="card-text"><small className="text-muted">Cart item name</small></p>
                                    <a className="nav-link" aria-current="page" href="#">
                                    <ul class="pagination">
                       <li class="page-item disabled">
                     <a class="page-link">+</a>
                   </li>
                   <li class="page-item"><a class="page-link" href="#">1</a></li>
    
                   <li class="page-item">
                  <a class="page-link" href="#">-</a>
                     </li>
                   </ul>
                                    Remove
                                </a>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Campus Sutra</h5>
                                    <p className="card-text"><small className="text-muted">Cart item name</small></p>
                                    <a className="nav-link" aria-current="page" href="#">
                                    <nav aria-label="...">
                             <ul class="pagination">
                       <li class="page-item disabled">
                     <a class="page-link">+</a>
                   </li>
                   <li class="page-item"><a class="page-link" href="#">1</a></li>
    
                   <li class="page-item">
                  <a class="page-link" href="#">-</a>
                     </li>
                   </ul>
</nav>
                                    Remove
                                </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    <button className="btn btn-outline-danger my-2" style={{width:"140px", heigth:"40px" }} type="submit">Place order</button>
                    <Footer />
            
           </>
    );
}

export default Cart;
