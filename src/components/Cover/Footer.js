/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div>
            <footer className='text-white-py-4 bg-black'>
                <div className='container'>
                    <nav className='row'>
                        <Link to="/" className='col-12 col-md3 d-flex aling-items-center justify-content-center'>
                            <img src="https://www.mascotassaintdaniel.com/wp-content/uploads/2019/02/Mascotas-Saint-Daniel-logo-trasp-modo-web.png" className='mx-2' height="200px" />
                        </Link>
                    </nav>

                </div>

            </footer>
        </div>
    )

}
export default Footer