import React from 'react';
import { Image,Container,Row,Col,Button,Card,Nav,Form, ButtonGroup} from 'react-bootstrap';
import linkedin from '../Assets/Landing Page/linkedin.png';
import twitter2 from '../Assets/Landing Page/twitter.png';
import facebook from '../Assets/Landing Page/facebook.png';
function Footer() {
    return (
    <div style={{width:"100%",height:500,backgroundColor:"gray"}}>
        <Container style={{width:"100%",height:300}}>
        <Row>
            <Col md={2} xs={3} style={{marginTop:40,marginLeft:30}}>
                <h5 style={{marginBottom:25}}>Home</h5>
                <Row style={{marginLeft:1,marginBottom:15}}>
                    <h6>Free Kundali</h6>
                </Row>
                <Row style={{marginLeft:1,marginBottom:15}}>
                    <h6>Free Love Matching</h6>
                </Row>
                <Row style={{marginLeft:1,marginBottom:15}}>
                    <h6>Today's Horoscope</h6>
                </Row>
                <Row style={{marginLeft:1,marginBottom:15}}>
                    <h6>Today's Panchang</h6>
                </Row>
            </Col>
            <Col md={2} xs={3} style={{marginTop:40,marginLeft:30}}>
                <h5 style={{marginBottom:25}}>Calculators</h5>
                <Row style={{marginLeft:1,marginBottom:15}}>
                    <h6>Kalasarpa Calculation</h6>
                </Row>
                <Row style={{marginLeft:1,marginBottom:15}}>
                    <h6>Sadhi sati calculation</h6>
                </Row>
                <Row style={{marginLeft:1,marginBottom:15}}>
                    <h6>Manglik calculation</h6>
                </Row>
                <Row style={{marginLeft:1,marginBottom:15}}>
                    <h6>Varshaphal calculation</h6>
                </Row>
                <Row style={{marginLeft:1,marginBottom:15}}>
                    <h6>Panchang calculation</h6>
                </Row>
            </Col>
            <Col md={2} xs={3} style={{marginTop:40,marginLeft:30}}>
                <h5 style={{marginBottom:25}}>Horoscope</h5>
                <Row style={{marginLeft:1,marginBottom:10}}>
                    <h6>Today's horoscope</h6>
                </Row>
                <Row style={{marginLeft:1,marginBottom:15}}>
                    <h6>Monthly horoscope</h6>
                </Row>
                <Row style={{marginLeft:1,marginBottom:15}}>
                    <h6>Yearly horoscope</h6>
                </Row>
            </Col>
            <Col md={2} xs={3} style={{marginTop:40,marginLeft:30}}>
                <h5 style={{marginBottom:25}}>Full reports</h5>
                <Row style={{marginLeft:1,marginBottom:15}}>
                    <h6>First Link</h6>
                </Row>
                <Row style={{marginLeft:1,marginBottom:15}}>
                    <h6>Second Long Link</h6>
                </Row>
                <Row style={{marginLeft:1,marginBottom:15}}>
                    <h6>Third Link</h6>
                </Row>
                <Row style={{marginLeft:1,marginBottom:15}}>
                    <h6>Fourth long Link</h6>
                </Row>
            </Col>
            <Col md={2} xs={9} style={{marginTop:40,marginLeft:30}}>
                <Row style={{marginLeft:1,marginBottom:20}}>

                </Row>
                <Row style={{marginLeft:1,marginBottom:15}}>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</h6>
                </Row>
                <Row style={{marginLeft:1,marginBottom:15}}>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h6>
                </Row>
                
                <Row style={{marginLeft:1,marginBottom:15}}>
                    <h6>Copyright 2020 - All rights Received</h6>
                </Row>
            </Col>

            
        </Row>
        <Row xs={12}>
            <div style={{marginLeft:'45%'}}> 
        <a href="#">
        <Image src={linkedin} style={{height:20,width:20,marginRight:10}}/>
        </a>
        <a href="#">
        <Image src={twitter2} style={{height:20,width:20,marginRight:10}}/>
        </a>
        <a href="#">
        <Image src={facebook} style={{height:20,width:20}}/>
        </a>
        </div>
        </Row>
        </Container>
    </div>
    )
}

export default Footer
