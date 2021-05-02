import React from 'react'
import { Jumbotron, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Junmotroncomponent = () => {
    return (
        <>
            <Jumbotron fluid className="jumbotron">
                <Container>
                    {/* <h1>Fluid jumbotron</h1> */}
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
                            <p>
                                A webhosting services allow individuals and organizations to make their own website accessible
                                via the world wide web
                            </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2 ">
                            <Link to="/about"> <Button type="button" className="btn btn-outline-secondary btn-lg">Web Hosting</Button></Link>
                        </div>
                    </div>
                </Container>
            </Jumbotron>

        </>
    )
}
export default Junmotroncomponent;