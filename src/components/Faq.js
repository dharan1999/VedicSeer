import React from 'react';
import { Image,Container,Row,Col,Button,Card,Nav,Form, ButtonGroup,Tabs,Tab} from 'react-bootstrap';
import fight from '../Assets/Landing Page/fight.jpg';
import fight2 from '../Assets/Landing Page/fight2.jfif';
import marriage from '../Assets/Landing Page/marriage.jfif';
import './css/Kundli.css';
function kundli() {
    return (
       <div>
            <Container>
                <Row style={{marginBottom:100}}>
                    <Col md={6} xs={12} sm={12} style={{marginTop:70}}>
                        <p className="page2-section1" style={{fontWeight:'normal',fontSize:22}}>
                            Frequently asked questions about Manglic Dosha
                            
                        </p>
                        <p className="page2-section1" style={{fontWeight:'normal',fontSize:18}}>
                            What are the <span style={{color:'orange'}}>impacts</span> of Manglic Dosha?
                            
                        </p>
                        <p>
                       
                        <ul>
                            <li style={{marginBottom:4}}>It is considered at the most inauspicious as the native with the Mangal Dosha in the Horoscope may remain unmarried throughout his/her whole lives.</li>
                            <li style={{marginBottom:4}}>It is observed that when two people get married to each other without considering the mangal dosha in their horoscope, then they could face a lot of problems in their married life and their marriage would not be successful.</li>
                            <li style={{marginBottom:4}}>In another case, if planet Mars is placed in the 4th house of the native's horoscope, then it can create financial troubles in the life of a person and he/she might not be financially strong in case of this position of the planet Mars in the horoscope.</li>
                            <li style={{marginBottom:4}}>And if the planet Mars is placed in the 12th house of horoscope,then the natives might suffer from mental illness as well as with financial lossess and they could not maintain the stability in their married life.</li>

                        </ul>
                        </p>
                        </Col>
                        <Col md={6} xs={12} style={{marginTop:70}}>
                             <Image src={fight} className="img-fluid" style={{marginRight:200,float:'right',height:350,width:280,paddingTop:5,borderTop:"15px solid orange",borderRight:"15px solid orange",paddingRight:5}}/>
                             <Image src={fight2} className="img-fluid" style={{marginRight:0,float:'right',height:250,width:270,marginTop:200,position:'absolute',marginLeft:220,borderRight:"15px solid orange",paddingRight:5,borderBottom:"15px solid orange",paddingBottom:5,borderTop:"4px solid white",borderLeft:"4px solid white"}}/>
                        </Col>
                       


                 
                    
                    
                </Row>
                <Row style={{marginBottom:100}}>
                <Col md={6} xs={12} style={{marginTop:70}}>
                             <Image src={fight} className="img-fluid" style={{marginRight:200,float:'right',height:350,width:280,paddingLeft:5,paddingBottom:5,borderLeft:"15px solid orange",borderBottom:"15px solid orange"}}/>
                             <Image src={fight2} className="img-fluid" style={{marginRight:0,float:'right',height:250,width:270,marginTop:200,position:'absolute',marginLeft:220,borderRight:"15px solid orange",paddingRight:5,borderBottom:"15px solid orange",paddingBottom:4,borderLeft:"4px solid white",borderTop:"4px solid white"}}/>
                        </Col>
                <Col md={6} xs={12} sm={12} style={{marginTop:70}}>
                        <p className="page2-section1" style={{fontWeight:'bold',fontSize:22}}>
                           What is the Science behind Manglik dosha
                            
                        </p>
                        <p className="page2-section1" style={{fontWeight:'normal'}}>
                        
                            Marriage is one of the most beautiful and real relationships on his earth. It is a relation between two souls who become one, who promoted to get commited to each other for their entire lives, who promised to stay on each other's side in good and bad tims and hold ech other's hand through thick and thin. But, planets play a major role in the life of every individual as they influence every area of their lives.
                        </p>
                        <p className="page2-section1" style={{fontWeight:'normal'}}>
                        The planety combinations formed in the kundli of any persoon could be benefic or malefic, depending on their placement. Planet Mars is often considered to be a malefic cast on the life of the native. According to Vedic Astrology, the negative impact of MArs is typically observed in marriage and life post-marriage. The Manglik dosha in the horoscope, which makes the native a 'Manglic', is considered very inauspicious because an afficted native may remain unmarried throughout his/her life.
                        
                        </p>
                        </Col>
                        
                       


                </Row>
                <Row style={{marginBottom:100}}>
                <Col md={6} xs={12} sm={12} style={{marginTop:70}}>
                        <p className="page2-section1" style={{fontWeight:'bold',fontSize:22}}>
                            Are there different types of Mangal Dosha?
                            
                        </p>
                        
                        <p>
                            According to Indian astrology, if Mangal Dosha present in the kundli of a person then it can make the native suffer to some extent.
                        </p>
                        <p>
                            <span style={{color:'orange',fontStyle:'bold'}}>Anshik Mangal dosha</span> might in the horoscop of he native which means that a person has a minor mangal dosha in the existing horoscope. The effects of Anshik Manglik dosha <span style={{color:'orange'}}>wear off with the passage of the time</span> or it remains till the age of 28 and it can be rectified by performing some rituals like Shanti poja.
                        </p>
                        <p>
                            <span style={{color:'orange',fontStyle:'bold'}}>Manglik or Mangal Dosha</span> is considered  <span style={{color:'orange'}}>highly inauspicious </span>and it is believed to have negative impacts on the married life of the native. It is also said that it can lead to the death of the partner if not treated appropriately. One can also perform puja to get rid of the negative effects of this dosha.
                        </p>
                        </Col>
                        <Col md={6} xs={12} style={{marginTop:120}}>
                             <Image src={marriage} className="img-fluid" style={{marginRight:50,float:'right',height:300,width:450,padding:7,border:"6px solid orange"}}/>
                             
                        </Col>
                       
                </Row>
                <Row style={{marginBottom:50}}>
                <Col md={12} xs={12} lg={12}>
                <p style={{fontWeight:'bold',fontSize:22,textAlign:'center',color:'white',marginTop:100,position:'absolute',marginLeft:'35%'}}>Want to Check Kundli Matching <br /><a href='#'>Click here </a></p>
                <Image src={marriage} className="img-fluid" style={{height:200,width:'70%',marginLeft:180}}/>
                
                </Col>
                </Row>
                <Row style={{marginBottom:200}}>
                    <p style={{float:'left',marginLeft:20}}>Previous <br /><span style={{fontWeight:'bold'}}>Kaal Sarpa Dosha</span></p>
                    <p style={{float:'right',marginLeft:'70%'}}>Next Up <br /><span style={{fontWeight:'bold'}}>Kaal Sarpa Dosha</span></p>
                </Row>
              
            </Container>
            </div>
    )
}

export default kundli
