import React from 'react';
import fight from '../Assets/Landing Page/fight.jpg';
import fight2 from '../Assets/Landing Page/fight2.jfif';
import shout from '../Assets/Landing Page/shout.jfif';
import marriage from '../Assets/Landing Page/marriage.jfif';
import { Image,Container,Row,Col,Button,Card,Nav,Form, ButtonGroup} from 'react-bootstrap';
import cobra from '../Assets/Landing Page/Icons/cobra.png';
import mars from '../Assets/Landing Page/Icons/mars (1).png';
import magicball from '../Assets/Landing Page/Icons/magic-ball.png';
import panchang from '../Assets/Landing Page/Icons/Filled outline panchang.png';
import './css/Astrocalculator.css';
import './css/Kundli.css';
function kundli() {
    return (
       <div>
            <Container>
                <Row style={{marginBottom:100}}>
                    <Col md={6} xs={12} sm={12} style={{marginTop:70}}>
                        <p className="page2-section1" style={{fontWeight:'bold',fontSize:22}}>
                            Frequently asked questions about Sadhe Sati
                            
                        </p>
                        <p className="page2-section1" style={{fontWeight:'bold',fontSize:18}}>
                            Is Saturn a tough taskmaster?
                            
                        </p>
                        <p>
                       
                            Yes, Saturn is indeed a though taskmaster,who doesn't entertain impropriety, indiscipline, and irregularity, but there is more to this stern approach of the planet. Equality and justice are two of the most important qualities that Saturn stands for and this aspect is quite apparent from the way he treats the Gods, Demons, and Humans. You would be suprised that divine beings like Lord Vishnu, Lord Shiva amongst others have faced the heat of Sade Sati. 
                        </p>
                        </Col>
                        <Col md={6} xs={12} style={{marginTop:70}}>
                            
                             <Image src={fight} className="img-fluid" style={{marginRight:0,float:'right',height:300,width:250,paddingTop:5,position:'absolute',borderTop:"15px solid orange",borderRight:"15px solid orange",paddingRight:5,marginLeft:70}}/>
                             <Image src={shout} className="img-fluid" style={{marginRight:0,float:'right',height:150,width:200,paddingBottom:5,position:'absolute',borderRight:"15px solid orange",borderBottom:"15px solid orange",paddingRight:5,marginTop:250}}/>
                             <Image src={fight2} className="img-fluid" style={{marginRight:80,float:'right',height:200,width:230,marginTop:200,marginLeft:250,borderRight:"15px solid orange",paddingRight:5,borderBottom:"15px solid orange",paddingBottom:5,borderTop:"4px solid white",borderLeft:"4px solid white"}}/>
                        </Col>
                       


                 
                    
                    
                </Row>
                <Row style={{marginBottom:100}}>

                <Col md={6} xs={12} style={{marginTop:120}}>
                             <Image src={marriage} className="img-fluid" style={{marginRight:50,float:'right',height:300,width:450}}/>
                             
                        </Col>
                <Col md={6} xs={12} sm={12} style={{marginTop:70}}>
                        <p className="page2-section1" style={{fontWeight:'bold',fontSize:22,marginTop:50}}>
                            How is Sade Sati caused?
                            
                        </p>
                        
                        <p>
                            You would be thinking, what is Sade Sati and how exactly is it caused? If saturn is transmitting through the 12th,1st, and 2nd, signs from your natal Moon, thn it can be said that the Sade Sati is in operation in you chart. These Transmits are cateragized into three parts, which are known as the 1st phase,2nd phase, and 3rd phase respecively. Out of the three, the 2nd phase is considered to be the most difficult period.
                        </p>
                </Col>
                      

                </Row>
                <Row style={{marginBottom:100}}>
                <Col md={6} xs={12} sm={12} style={{marginTop:70}}>
                        <p className="page2-section1" style={{fontWeight:'bold',fontSize:22}}>
                            How does it affect your life?
                            
                        </p>
                        
                        <p>
                            According to Indian astrology, if Mangal Dosha present in the kundli of a person then it can make the native suffer to some extent.
                        </p>
                        <p>
                            The Sade Sati is one of those planetary transit, which has a very frastic impact on various areas of our lives, sometimes even simultaneously. Saturn happens to be a very slow planet, and its influence on our natal Moon - the planet which happens to be the signifance of our mind and thinking patterns, slow down our thought process and decision makinf skills.
                        </p>
                        <p>
                            The Sade Sati is not a period of retribution or pure hardship as many perceive it,but it is instead a phase to redeem yourself and to refine your core personality, while learning to be more responsible.
                        </p>

                        <p>
                            Do you want to know how the Sade sati will affect you and your life? Know more about how this Saturn Transit will impact your business, career, health, wealth and relationships. But our Saturn Transit Report and know it all.
                        </p>
                        </Col>
                        <Col md={6} xs={12} style={{marginTop:120}}>
                             <Image src={marriage} className="img-fluid" style={{marginRight:50,float:'right',height:300,width:450,padding:7,border:"6px solid orange"}}/>
                             
                        </Col>
                       
                </Row>
                <Row  > 
                <p style={{fontSize:24,float:'center',textAlign:'center',fontWeight:'bold',marginLeft:'40%'}}>Our Other Calculators </p>

                </Row>
                <Row style={{marginBottom:50}}>
                <Col md={2} xs={2} lg={2} style={{width:'20%',alignContent:'center',marginLeft:60}}>
                <Card className="card1"  style={{height:400,width:200}}>
                    <Card.Body>
                    <Card.Img src={cobra} style={{width:70,height:80,marginTop:20,marginLeft:45,marginBottom:10}}/>
                    <Card.Title style={{marginTop:5,textAlign:'center'}}>Kalasarpa Dosha</Card.Title>
                    <Card.Text style={{marginTop:5,textAlign:'center',fontSize:15}}>View what is kalasarpa dosha,it's presence in your life and remedies</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={2} xs={2} lg={2} style={{width:'20%',alignContent:'center',marginLeft:60}}>
                <Card className="card1"  style={{height:400,width:200}}>
                    {/* <a href="components/Manglicdosha.js"> */}
                    <Card.Body>
                    <Card.Img src={mars} style={{width:70,height:80,marginTop:20,marginLeft:45,marginBottom:10}}/>
                    <Card.Title style={{marginTop:5,textAlign:'center'}}>Manglic Dosha</Card.Title>
                    <Card.Text style={{marginTop:5,textAlign:'center',fontSize:15}}>View what is kalasarpa dosha,it's presence in your life and remedies</Card.Text>
                    </Card.Body>
                    {/* </a> */}
                </Card>
                </Col>
                <Col md={2} xs={2} lg={2} style={{width:'20%',alignContent:'center',marginLeft:60}}>
                <Card className="card1" style={{height:400,width:200}}>
                    <Card.Body>
                    <Card.Img src={magicball} style={{width:70,height:80,marginTop:20,marginLeft:40,marginBottom:10}}/>
                    <Card.Title style={{marginTop:5,textAlign:'center'}}>Varshaphal Calculation</Card.Title>
                    <Card.Text style={{marginTop:5,textAlign:'center',fontSize:15}}>View what is kalasarpa dosha,it's presence in your life and remedies</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={2} xs={2} lg={2} style={{width:'20%',alignContent:'center',marginLeft:60}}>
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
            </div>
    )
}

export default kundli