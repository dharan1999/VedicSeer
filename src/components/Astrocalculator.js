import React from 'react';
import { Image,Container,Row,Col,Button,Card,Nav,Form, ButtonGroup} from 'react-bootstrap';
import cobra from '../Assets/Landing Page/Icons/cobra.png';
import sadhe from '../Assets/Landing Page/Icons/Filled outline.png';
import mars from '../Assets/Landing Page/Icons/mars (1).png';
import magicball from '../Assets/Landing Page/Icons/magic-ball.png';
import panchang from '../Assets/Landing Page/Icons/Filled outline panchang.png';
import './css/Astrocalculator.css';


function Astrocalculator() {
    return (
      
        <Container style={{marginTop: 50,marginBottom:20}}>
         
            <Row>
                <Col md={6} xs={12} sm={12}>
                    <h3>
                        VedicSeer's Astrology Calculators
                    </h3>
                    <p style={{fontSize:14}}>
                        Describing here why Vedic astrology calculators are necessary and how would it help the uder in their day to day life. How VedicSeer's Calculators differ from that of others
                    </p>
                </Col>
               
                <Col md={6}  xs={12} sm={12}>
                <div style={{maxWidth:200,float:'right'}}>
                <Button variant="warning" style={{marginTop:10,float:'right',padding:"8px 15px 8px 15px",fontWeight:'bold',color:'white',width:'100%',height:50,textAlign:'center',fontSize:15}}>Our Reviews</Button>
                </div>
                </Col>
            </Row>

            <Row style={{marginTop:5}}>
                <Col md={2}  xs={6} sm={6} style={{width:'20%',alignContent:'center',marginLeft:60}}>
                <Card className="card1"  style={{height:400,width:200}}>
                    <Card.Body>
                    <Card.Img src={cobra} style={{width:70,height:80,marginTop:20,marginLeft:45,marginBottom:10}}/>
                    <Card.Title style={{marginTop:5,textAlign:'center'}}>Kalasarpa Dosha</Card.Title>
                    <Card.Text style={{marginTop:5,textAlign:'center',fontSize:15}}>View what is kalasarpa dosha,it's presence in your life and remedies</Card.Text>
                    </Card.Body>
                </Card>
                </Col>

                <Col md={2} xs={6} sm={6} style={{width:'20%'}}>
                <Card  className="card1"  style={{height:400,width:200}}>
                    <Card.Body>
                    <Card.Img src={sadhe} style={{width:70,height:80,marginTop:20,marginLeft:45,marginBottom:10}}/>
                    <Card.Title style={{marginTop:5,textAlign:'center'}}>Sadhe Sati</Card.Title>
                    <Card.Text style={{marginTop:5,textAlign:'center',fontSize:15}}>View what is kalasarpa dosha,it's presence in your life and remedies</Card.Text>
                    </Card.Body>
                </Card>
                </Col>

                <Col md={2} xs={6} sm={6} style={{width:'20%'}}>
                <Card className="card1"  style={{height:400,width:200}}>
                    <Card.Body>
                    <Card.Img src={mars} style={{width:70,height:80,marginTop:20,marginLeft:45,marginBottom:10}}/>
                    <Card.Title style={{marginTop:5,textAlign:'center'}}>Manglic Dosha</Card.Title>
                    <Card.Text style={{marginTop:5,textAlign:'center',fontSize:15}}>View what is kalasarpa dosha,it's presence in your life and remedies</Card.Text>
                    </Card.Body>
                </Card>
                </Col>

                <Col md={2} xs={6} sm={6} style={{width:'20%'}}>
                <Card className="card1" style={{height:400,width:200}}>
                    <Card.Body>
                    <Card.Img src={magicball} style={{width:70,height:80,marginTop:20,marginLeft:40,marginBottom:10}}/>
                    <Card.Title style={{marginTop:5,textAlign:'center'}}>Varshaphal Calculation</Card.Title>
                    <Card.Text style={{marginTop:5,textAlign:'center',fontSize:15}}>View what is kalasarpa dosha,it's presence in your life and remedies</Card.Text>
                    </Card.Body>
                </Card>
                </Col>

                <Col md={2} xs={6} sm={6} style={{width:'20%'}}>
                <Card className="card1" style={{height:400,width:200,marginRight:30}}>
                    <Card.Body>
                    <Card.Img src={panchang} style={{width:70,height:80,marginTop:20,marginLeft:45,marginBottom:10}}/>
                    <Card.Title style={{marginTop:5,textAlign:'center'}}>Panchang Calculation</Card.Title>
                    <Card.Text style={{marginTop:5,textAlign:'center',fontSize:15}}>View what is kalasarpa dosha,it's presence in your life and remedies</Card.Text>
                    </Card.Body>
                </Card>
                </Col>

                
            </Row>
        </Container>
    )
}

export default Astrocalculator
