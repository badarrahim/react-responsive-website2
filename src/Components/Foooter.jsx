import React from 'react';
import { } from 'react-router-dom';
import fimage from '../img/fimage.png';

const Foooter = () => {
    return (
        <>
            <footer>
                <div className="container-fluid padding">
                    <div className="row text-center">
                        <div className="col-md-4 ">
                            <img src={fimage} />
                            <hr className="light" />
                            <p>555-555-555</p>
                            <p>badarabasi@gmail.com</p>
                            <p>Modern St#01</p>
                            <p>City, ISB</p>
                        </div>
                        <div className="col-md-4">
                            <hr className="light" />
                            <h5>Our Hours</h5>
                            <hr className="light" />
                            <p>Monday : 9am-5pm</p>
                            <p>saturday : 10am-3pm</p>
                            <p>sunday : closed</p>
                        </div>
                        <div className="col-md-4">
                            <hr className="light" />
                            <h5>Service Area</h5>
                            <hr className="light" />
                            <p>City,State,0000</p>
                            <p>City,State,2222</p>
                            <p>City,State,0000</p>
                            <p>City,State,1111</p>
                        </div>
                        <div className="col-12">
                            <hr className="light" />
                            <h5>&copy; w3newbie.com</h5>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Foooter;