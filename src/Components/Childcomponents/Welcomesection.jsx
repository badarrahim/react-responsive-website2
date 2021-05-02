import React from 'react';
import desk from '../../img/desk.png';

import { Link } from 'react-router-dom';
const Welcomesection = () => {
    return (
        <>
            <div className="container-fluid padding">
                <div className="row welcome text-center">
                    <div className="col-12">
                        <h1 className="display-4">
                            Built with ease.
                        </h1>
                        <hr />
                    </div>
                    <div className="col-12">
                        <p className="lead">
                            Welcome to my reactjs responsive website!! React is a free javascript library !
                            You can use bootsrap and css with it
                        </p>
                    </div>
                </div>

            </div>
            <div className="container-fluid padding">
                <div className="row text-center">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <i className="fas fa-code"></i>
                        <h3>HTML5</h3>
                        <p>Built with the latest version of HTML,HTML5</p>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <i className="fas fa-bold"></i>
                        <h3>BOOTSTRAP</h3>
                        <p>Built with the latest version of BOOTSTRAP</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <i className="fab fa-css3"></i>
                        <h3>CSS3</h3>
                        <p>Built with the latest version of CSS3</p>
                    </div>

                </div>
                <hr className="my-4" />
            </div>

            <div className="container-fluid padding">
                <div className="row padding">
                    <div className="col-md-12 col-lg-6">
                        <h2>If you built it...</h2>
                        <p>The column will automatically stack on top of each other when the
                        screen is less than 576px
                        </p>
                        <p>Resize the browser window to see the effect. Resonsive web design has
                        become more important nowdays.
                        </p>
                        <p>It can display the web pages differently depending on the screen size</p>
                        <br />
                        <Link to="/" className="btn btn-primary">Learn More</Link>

                    </div>
                    <div className="col-lg-6 ">
                        <img src={desk} className="img-fluid"></img>
                    </div>
                </div>
                <hr className="my-4" />

            </div>
        </>
    )
}
export default Welcomesection;