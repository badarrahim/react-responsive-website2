import React from 'react'
import { Card, Button } from 'react-bootstrap';
import team1 from '../../img/team1.png';
import team2 from '../../img/team2.png';
import team3 from '../../img/team3.png';
import { Link } from 'react-router-dom';
import background2 from '../../img/background2.png';


const MeetTeam = () => {
    return (
        <>
            <div className="container-fluid padding">
                <div className="row welcome text-center">
                    <div className="col-12">
                        <h1 className="display-4">
                            Meet the team
                         </h1>
                    </div>
                    <hr />
                </div>
            </div>

            <div className="container-fluid padding">
                <div className="row padding">
                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={team1} />
                            <Card.Body>
                                <Card.Title>M.Kamran</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <Button variant="btn btn-outline-secondary">See Profile</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={team2} />
                            <Card.Body>
                                <Card.Title>Usama Abbasi</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <Button variant="btn btn-outline-secondary">See Profile</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={team3} />
                            <Card.Body>
                                <Card.Title>Ahsan Shah</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <Button variant="btn btn-outline-secondary">See Profile</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Two column section */}
            <div className="container-fluid padding">
                <div className="row padding">
                    <div className="col-md-12 col-lg-6">
                        <h2>Our Philosphy</h2>
                        <p>The column will automatically stack on top of each other when the
                        screen is less than 576px
                        </p>
                        <p>ReactJS is an open source JavaScript library designed by Facebook for creating rich and engaging web apps fast and efficiently with minimal 
                            coding. The core objective of ReactJS 
                            is providing the best possible rendering performance. 
                            Its strength comes from the focus on individual components. Instead of working on the entire web app, ReactJS allows a developer to break down the complex UI into simpler components.
                        
                        </p>



                    </div>
                    <div className="col-lg-6 ">
                        <img src={background2} className="img-fluid"></img>
                    </div>
                </div>
                <hr className="my-4" />

            </div>
        </>
    )
}
export default MeetTeam;