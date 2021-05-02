import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap';
import Carouselslider from './Childcomponents/Carouselslider';
import Junmotroncomponent from './Childcomponents/Jumbotroncomponent';
import Welcomesection from './Childcomponents/Welcomesection';
import FixedBackground from './Childcomponents/Fixedbackground'
import MeetTeam from './Childcomponents/Meetteam';
import Connect from '././Connect';
const Home = () => {
    return (
        <>
            <Carouselslider />
            <Junmotroncomponent />
            <Welcomesection />
            <FixedBackground />
            <MeetTeam />
            <Connect />
        </>
    )
}
export default Home;