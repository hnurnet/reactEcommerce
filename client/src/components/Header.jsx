import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container">
               <i className='bi bi-shop-window fs-4 text-warning me-3'></i> <a className="navbar-brand" href="#">eShop</a>
               
               <div class="input-group">
               <input type="text" class="form-control rounded-0 " placeholder="Search . . ." aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <div class="input-group-append bg-warning">
              <span class="input-group-text bg-warning" id="basic-addon2"><i className='bi bi-search'></i></span>
              </div>
              </div>

                <ul className="navbar-nav me-auto mt-2 ms-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active d-flex flex-column" href="#" aria-current="page">
                            <small style={{fontSize: "10px"}}>Hello</small> 
                            <strong style={{fontSize: "11px"}}>Guest</strong>
                            </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active d-flex flex-column" href="#" aria-current="page">
                    <small style={{fontSize: "10px"}}>Your</small> 
                            <strong style={{fontSize: "11px"}}>Shopping</strong>
                            </a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link active d-flex" href="#" aria-current="page">
                           <i className='bi bi-basket2 text-white me-1'></i>
                           <span>0</span>
                            </a>
                    </li>
                </ul>
                
            </div>
        </nav>
      
    </div>
  )
}

export default Header
