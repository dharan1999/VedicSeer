import React from 'react';
import ReactDOM from "react-dom";
import { Image,Container,Row,Col,Button,Card,Foot,Carousel} from 'react-bootstrap';
import profile from '../Assets/Landing Page/profile.jpeg';
// import Carousel from 'react-elastic-carousel';


function Testimonials() {
 
    return (
        <div style={{marginTop:100,marginBottom:100}}>
            <Container>
                <Row>
                    <Col md={3} xs={12} style={{float:'left'}}>
                        <h3 style={{fontWeight:'bold'}}>What our Customers says</h3>
                        <p> Lorem ipsum dolor sit amet,consectetur adipiscing elit</p>
                    </Col>
                    <Col md={4} xs={12} style={{marginLeft:15}}> 
                        <Card style={{boxShadow:"  0 0 20px rgba(33,33,33,.2)",height:160,width:'100%'}}>
                            <Card.Body>
                                <Row>
                                <Card.Img src={profile} style={{width:60,height:60,borderRadius:'50%',position:'absolute',marginLeft:10}}/>
                               
                                    <Row>
                                    <Card.Text style={{marginLeft:100,fontWeight:'bold'}}>
                                        Joseph Jackson
                                    </Card.Text>
                                    </Row>
                                    <Row>
                                    <Card.Text style={{marginLeft:100,fontSize:12}}>
                                        Product Manager
                                    </Card.Text>
                                    </Row>
                                
                                </Row>
                                <Row style={{marginTop:30,float:'left',fontSize:13,marginLeft:5,marginRight:5}}>
                                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</Card.Text>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} xs={12}> 
                        <Card style={{boxShadow:"  0 0 20px rgba(33,33,33,.2)",height:160,width:'100%'}}>
                        <Card.Body>
                                <Row>
                                <Card.Img src={profile} style={{width:60,height:60,borderRadius:'50%',position:'absolute',marginLeft:10}}/>
                               
                                    <Row>
                                    <Card.Text style={{marginLeft:100,fontWeight:'bold'}}>
                                        Joseph Jackson
                                    </Card.Text>
                                    </Row>
                                    <Row>
                                    <Card.Text style={{marginLeft:100,fontSize:12}}>
                                        Product Manager
                                    </Card.Text>
                                    </Row>
                                
                                </Row>
                                <Row style={{marginTop:30,float:'left',fontSize:13,marginLeft:5,marginRight:5}}>
                                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</Card.Text>
                                </Row>
                            </Card.Body>
                            </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Testimonials;
