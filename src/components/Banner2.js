import React from 'react';

import { Image,Container,Row,Col,Button,Card,Nav,Form, ButtonGroup,Tabs,Tab} from 'react-bootstrap';
import banner2 from '../Assets/Landing Page/banner2.jfif';
import email from '../Assets/Landing Page/Icons/Icon material-person.png';
import bod from '../Assets/Landing Page/Icons/Icon awesome-calendar-day.png';
import time from '../Assets/Landing Page/Icons/Icon ionic-ios-time.png';
import city from '../Assets/Landing Page/Icons/Icon awesome-city.png';
function banner() {
    return (
       
            <Container>
                <Row>
                <Col md={5} xs={11} xl={5} lg={5} style={{marginTop:100}}>
                    <p className="promo-title" style={{fontWeight:'normal',fontSize:30}}>
                    What is <span style={{color:'orange'}}>Manglic Dosha</span> 
                    </p>
                    <p>
                    According to the Vedic astrology, the Mangal Dosha is the most malefic dosha that exists in the hooscope of the native. It could have adverse effects in all the areas of the life of the native especially in matters related to marriage. PLanet Mars is known to bring bad luck and a lot of problems in life of individuals. According to Vedic astrology, the person could be considered Manglik if manglic dosh or planet mars is positioned in the 1st,2nd,4th,7th,8th, or 12th house of the horoscope of the individual.
                    </p>
                    

                </Col>
                <Col md={7} xs={12} style={{marginTop:100}}>
                    <Image src={banner2} className="img-fluid" style={{marginRight:100,height:300,width:400,float:'right'}}/>
                </Col>
                </Row>

                <Row style={{marginTop:50}}>
                    <Card style={{ boxShadow:" 8px 8px 8px -6px rgba(0,0,0,.5)", height:90,marginTop:4,marginBottom:10,width:'100%'}}>
                            <Card.Body>
                             
                                            <Form.Group style={{display:'inline-block'}}>
                                                
                                                <Form.Label style={{fontWeight:'bold'}}>Name</Form.Label>
                                                <div style={{maxWidth:180}}>
                                                    <Image src={email} style={{width:17,height:17,position:'absolute',marginLeft:5,marginTop:7}}/>
                                                    <input type="text" placeholder="eg. Ramesh" style={{width:'100%',paddingLeft:30}}/>
                                                    
                                                </div>

                                            </Form.Group>
                                          
                                            
                                          
                                            <Form.Group style={{display:'inline-block',marginLeft:20}}>
                                                
                                                <Form.Label style={{fontWeight:'bold'}}>Date of Birth</Form.Label>
                                                <div style={{maxWidth:180}}>
                                                    <Image src={bod} style={{width:17,height:17,position:'absolute',marginLeft:5,marginTop:7}}/>
                                                    <input type="date" placeholder="eg. Ramesh" style={{width:'100%',paddingLeft:30}}/>
                                                    
                                                </div>

                                            </Form.Group>

                                            <Form.Group style={{display:'inline-block',marginLeft:20}}>
                                                
                                                <Form.Label style={{fontWeight:'bold'}}>Time of Birth</Form.Label>
                                                <div style={{maxWidth:180}}>
                                                    <Image src={time} style={{width:17,height:17,position:'absolute',marginLeft:5,marginTop:7}}/>
                                                    <input type="time" placeholder="eg. Ramesh" style={{width:'100%',paddingLeft:30}}/>
                                                    
                                                </div>

                                            </Form.Group>

                                            <Form.Group style={{display:'inline-block',marginLeft:20}}>
                                                
                                                <Form.Label style={{fontWeight:'bold'}}>Place of Birth</Form.Label>
                                                <div style={{maxWidth:180}}>
                                                    <Image src={city} style={{width:17,height:17,position:'absolute',marginLeft:5,marginTop:7}}/>
                                                    <input type="text" placeholder="City Name" style={{width:'100%',paddingLeft:30}}/>
                                                    
                                                </div>

                                            </Form.Group>
                                            <Form.Group style={{display:'inline-block',marginLeft:20}}>
                                                
                                                <Form.Label style={{fontWeight:'bold'}}>Time Zone</Form.Label>
                                                <div style={{maxWidth:180}}>
                                                    <Image src={city} style={{width:17,height:17,position:'absolute',marginLeft:5,marginTop:7}}/>
                                                    <input type="text" placeholder="Zone" style={{width:'100%',paddingLeft:30}}/>
                                                    
                                                </div>

                                            </Form.Group>
                                            
                                                <Button variant="warning" style={{float:'right',padding:"8px 15px 8px 15px",fontWeight:'bold',color:'white',height:60,textAlign:'center',fontSize:15,width:150}}>Show</Button>
                                                

                                            
                                            
                            </Card.Body>
                        </Card>
                </Row>

            </Container>


       
      
    )
}

export default banner
