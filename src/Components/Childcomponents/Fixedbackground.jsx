import React from 'react'
import { Button } from 'react-bootstrap';
import panda from '../../img/gif/panda.gif';
import poo from '../../img/gif/poo.gif';
import chicken from '../../img/gif/chicken.gif';
import unicorn from '../../img/gif/unicorn.gif'
import mac from '../../img/mac.png';

const FixedBackground = () => {
    return (
        <div>
            <figure>
                <div className="fixed-wrap">
                    <div id="fixed">

                    </div>
                </div>
            </figure>
            <Button className="fun " data-toggle="collapse" data-target="#emoji">
                Click for fun
            </Button>
            <div id="emoji" className="collapse">
                <div className="container-fluid padding">
                    <div className="row text-center">
                        <div className="col-md-3 col-sm-6">
                            <img className="gif" src={panda} />

                        </div>
                        <div className="col-md-3 col-sm-6">

                            <img className="gif" src={poo} />

                        </div>
                        <div className="col-md-3 col-sm-6">

                            <img className="gif" src={unicorn} />

                        </div>
                        <div className="col-md-3 col-sm-6">
                            <img className="gif" src={chicken} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FixedBackground;