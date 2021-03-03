import React from 'react';
import { Image,Container,Row,Col,Button,Card,Nav,Form, ButtonGroup,Tabs,Tab} from 'react-bootstrap';
import happy from '../Assets/Landing Page/Icons/Icon ionic-ios-happy.png';
import globe from '../Assets/Landing Page/Icons/Icon awesome-globe-asia.png';
import email from '../Assets/Landing Page/Icons/Icon material-person.png';
import bod from '../Assets/Landing Page/Icons/Icon awesome-calendar-day.png';
import time from '../Assets/Landing Page/Icons/Icon ionic-ios-time.png';
import city from '../Assets/Landing Page/Icons/Icon awesome-city.png';
import './css/Kundli.css';
function kundli() {
    return (
       <div>
            <Container>
                <Row>
                    <Col md={5} xs={12} sm={12} style={{marginTop:70}}>
                        <p className="page2-section1" style={{fontWeight:'normal',fontSize:22}}>
                            What is <span style={{color:'orange'}}>Kundali</span> and how VedicSeer is <span style={{color:'orange'}}>different</span> from others?
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <Card style={{ boxShadow:" 8px 8px 8px -6px rgba(0,0,0,.5)", height:90,marginTop:4,marginBottom:10,width:'100%'}}>
                            <Card.Body>
                            <div style={{width:'50%',float:'left',padding:5}}>
                                <Card.Text>
                                    <Card.Img src={happy} style={{width:40,height:40,marginLeft:15,left:0}}/>
                                    <span style={{marginBottom:0,marginLeft:15,display:'inline-block'}}>50000+</span><br/> <span style={{fontSize:13,fontWeight:'lighter',marginLeft:70,position:'absolute',paddingTop:0}}> Happy Clients </span>
                                    
                                </Card.Text>
                                </div> 
                                <div style={{width:'50%',float:'left',paddingLeft:50,paddingTop:3}}>
                                <Card.Text>
                                <Card.Img src={globe} style={{width:40,height:40,marginRight:0}}/>
                                <span style={{marginBottom:0,marginRight:15,display:'inline-block',marginTop:0,paddingLeft:10}}>180</span><br/> <span style={{fontSize:13,fontWeight:'lighter',position:'absolute',paddingLeft:50,paddingTop:0}}> Country Users </span>
                                </Card.Text>
                                </div> 

                            </Card.Body>
                        </Card>
                       


                    </Col>
                    <Col md={5} xs={12} style={{marginTop:70}}>
                        <Card  style={{height:455,backgroundColor:'white',boxShadow:"  0 0 20px rgba(33,33,33,.2)"}}>
                            <Card.Header style={{backgroundColor:'white'}}>
                                <Tabs defaultActiveKey="createKundali" className="tabs" style={{width:'100%',paddingLeft:25,color:"orange",cursor:"pointer",marginBottom:5,fontWeight:'bold'}}>
                                  <Tab eventKey="createKundali" title="Create Free Kundali">
                                {/* <Nav variant="pills " defaultActiveKey="#first" >
                                <Nav.Item >
                                    <Nav.Link href="#first" style={{fontWeight:'bold'}}>Create Free kundli</Nav.Link> */}
                                    <Form >
                                        <div style={{margin:'auto'}}>
                                            <Row>
                                            <Form.Group controlId="formBasicEmail">
                                                
                                                <Form.Label style={{marginTop:5,fontWeight:'bold',marginLeft:13}}>Email Address</Form.Label>
                                                <div style={{maxWidth:380,marginLeft:13}}>
                                                    <Image src={email} style={{width:17,height:17,position:'absolute',marginLeft:6,marginTop:7}}/>
                                                    <input type="email" placeholder="Enter Email" style={{width:'100%',paddingLeft:45}}/>
                                                    
                                                </div>

                                            </Form.Group>
                                            <Form.Group controlId="formBasicGender">
                                                
                                                <Form.Label style={{marginTop:0,fontWeight:'bold',marginLeft:15}}>Gender</Form.Label>
                                                <div style={{maxWidth:380,marginLeft:15}}>
                                                    
                                                   <ButtonGroup defaultActiveKey="male" style={{width:'100%',borderRadius:50,borderColor:'black'}}>
                                                       <Button variant='outline-warning' href='#male'>Male</Button>
                                                       <Button variant='outline-warning' href='#female'>Female</Button>
                                                   </ButtonGroup>
                                                    
                                                </div>

                                            </Form.Group>
                                            </Row>

                                            <Form.Group controlId="formBasicDateofBirth">
                                                
                                                <Form.Label style={{marginTop:0,fontWeight:'bold'}}>Date of Birth</Form.Label>
                                                <div style={{maxWidth:380}}>
                                                    <Image src={bod} style={{width:17,height:17,position:'absolute',marginLeft:6,marginTop:7}}/>
                                                    <input type="date" style={{width:'100%',paddingLeft:37}}/>
                                                </div>

                                            </Form.Group>

                                            <Form.Group controlId="formBasicTimeofBirth">
                                                
                                                <Form.Label style={{marginTop:0,fontWeight:'bold'}}>Time of Birth</Form.Label>
                                                <div style={{maxWidth:380}}>
                                                    <Image src={time} style={{width:17,height:17,position:'absolute',marginLeft:6,marginTop:7}}/>
                                                    <input type="time" placeholder="Enter Password" style={{width:'100%',paddingLeft:37}}/>
                                                </div>

                                            </Form.Group>

                                            <Form.Group controlId="formBasicPLaceofBirth">
                                                
                                                <Form.Label style={{marginTop:0,fontWeight:'bold'}}>Place of Birth</Form.Label>
                                                <div style={{maxWidth:380}}>
                                                    <Image src={city} style={{width:17,height:17,position:'absolute',marginLeft:6,marginTop:7}}/>
                                                    <input type="text" placeholder="City Name" style={{width:'100%',paddingLeft:37}}/>
                                                </div>

                                            </Form.Group>
                                            <Form.Group controlId="createkundli">
                                                
                                                {/* <Form.Label style={{marginTop:0}}>Create Kundli</Form.Label> */}
                                                <div style={{maxWidth:380}}>
                                                    
                                                <Button variant="warning" style={{padding:"10px 20px 10px 20px",width:'100%',fontWeight:'bold',color:'white'}}>Create Kundali</Button>
                                                </div>

                                            </Form.Group>
                                        </div>
                                    </Form>
                                    </Tab>
                                    <Tab eventKey="match" title="Horoscope Matching" >
                                    
                                        <p>Horoscope matching</p>
                                        </Tab>
                                  
                                {/* </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="#link1" style={{fontWeight:'bold'}}>Horoscope Matching</Nav.Link>
                                    
                                </Nav.Item>
                               
                                </Nav> */}
                                </Tabs>
                            </Card.Header>
                        </Card>
                    </Col>
                    <Col md={2} xs={12} style={{marginTop:70}}>
                        <Card style={{height:455}}>
                            <Card.Title style={{marginTop:5,textAlign:'center'}}>
                                Panchang
                            </Card.Title>
                        </Card>

                    </Col>
                </Row>
            </Container>
            </div>
    )
}

export default kundli
