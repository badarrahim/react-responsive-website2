import React from 'react'
import { Link } from 'react-router-dom'

const Connect = () => {
    return (
        <>
            <div className="container-fluid padding">
                <div className="row padding text-center">
                    <div className="col-12">
                        <h2>Connect</h2>
                    </div>
                    <div className="col-12 social padding">
                        <a href="#"><i className="fab fa-facebook m-2"></i></a>
                        <a href="#"><i className="fab fa-twitter m-2" ></i></a>
                        <a href="#"><i className="fab fa-google-plus-g m-2"></i></a>
                        <a href="#"><i className="fab fa-instagram m-2"></i></a>
                        <a href="#"><i className="fab fa-youtube m-2"></i></a>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Connect;