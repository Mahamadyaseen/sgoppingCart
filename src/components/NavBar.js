import React from 'react'

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark " style={{position:'sticky',top:'0'}}>
                <div className="container-fluid">
                    <a className="navbar-brand"><strong>
                        <em>
                            Shopping Cart
                        </em></strong></a>

                  
                     <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}
