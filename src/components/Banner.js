import React from 'react';
// import * as ReactBootstrap from "react-bootstrap";
import { Image,Container,Row,Col,Button} from 'react-bootstrap';
import banner1 from '../Assets/Landing Page/Illustrations/Group 438.png';

function banner() {
    return (
       
            <Container>
                <Row>
                <Col md={5} xs={11} xl={5} lg={5} style={{marginTop:100}}>
                    <p className="promo-title" style={{fontWeight:'normal',fontSize:30}}>
                    Some Line about the quality of VedicSeer
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Button variant="warning" style={{padding:"10px 20px 10px 20px",fontWeight:'bold',color:'white'}}>CTA btn</Button>

                </Col>
                <Col md={7} xs={12} style={{marginTop:50}}>
                    <Image src={banner1} className="img-fluid" style={{paddingLeft:20}}/>
                </Col>
                </Row>

            </Container>


       
      
    )
}

export default banner
