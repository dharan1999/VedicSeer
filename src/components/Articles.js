import React from 'react';
import { Image,Container,Row,Col,Button,Card,Nav,Form, ButtonGroup} from 'react-bootstrap';
import solarsystem from '../Assets/Landing Page/solar system.jfif';
import love from '../Assets/Landing Page/love.jfif';

function Articles() {
    return (
        <div style={{marginTop:70,textAlign:'center',fontWeight:'bold',marginBottom:100}}>
            <Container>
                <Row md={12} sm={12} xs={12}>
                    <p style={{float:'left',fontSize:15,marginLeft:18}}>VedicSeer's Articles</p>

                </Row>
                <Row xs={12} sm={12}> 
                    <Col md={3} xs={12} sm={12}>
                        <Image src={solarsystem} style={{width:250,height:250,float:'left'}}/>
                        <h5 style={{marginTop:10,float:'left',textAlign:'left',fontWeight:'bold'}}>Special astronomical events you should witness in 2021</h5>
                        <p style={{fontSize:14,fontWeight:'lighter',float:'left',textAlign:'left'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                    </Col>
                    <Col md={3} xs={12} sm={12}>
                        <div style={{borderLeft:"2px solid lightgray",height:720,position:'absolute'}}></div>
                        <p style={{float:'left',marginLeft:7,fontSize:18,textAlign:'left',marginBottom:0}}> 10 Signs You've Found Your Soulmate</p>
                        <p style={{fontSize:15,float:'left',marginLeft:7,fontWeight:'normal',textAlign:'left'}}>You can call it soulmates, twin flames, true love and a dozen other special words. We have so many words for it, but how do you know you have fo...</p>
                        <hr style={{height:2,width:460,marginTop:180,marginLeft:10,marginRight:10,marginBottom:0}}></hr>
                        {/* 2nd blog */}
                        <p style={{float:'left',marginLeft:7,fontSize:18,textAlign:'left',marginBottom:0,marginTop:0}}> Your Fall 2021 Astrology Calendar</p>
                        <p style={{fontSize:15,float:'left',marginLeft:7,fontWeight:'normal',textAlign:'left'}}>You can call it soulmates, twin flames, true love and a dozen other special words. We have so many words for it, but how do you know you have fo...</p>
                        <hr style={{height:2,width:460,marginTop:180,marginLeft:10,marginRight:10,marginBottom:0}}></hr>
                        {/* 3rd blog */}
                        <p style={{float:'left',marginLeft:7,fontSize:18,textAlign:'left',marginBottom:0,marginTop:0}}> Can Divine Feminine Energy Help Your Relationship?</p>
                        <p style={{fontSize:15,float:'left',marginLeft:7,fontWeight:'normal',textAlign:'left'}}>You can call it soulmates, twin flames, true love and a dozen other special words. We have so many words for it, but how do you know you have fo...</p>
                        <hr style={{height:2,width:460,marginTop:180,marginLeft:10,marginRight:10,marginBottom:0}}></hr>
                        {/* 4th blog */}
                        <p style={{float:'left',marginLeft:7,fontSize:18,textAlign:'left',marginBottom:0,marginTop:0}}> Do You Have The Wrong Zodiac Sign?</p>
                        <p style={{fontSize:15,float:'left',marginLeft:7,fontWeight:'normal',textAlign:'left'}}>You can call it soulmates, twin flames, true love and a dozen other special words. We have so many words for it, but how do you know you have fo...</p>
                        <hr style={{height:2,width:460,marginTop:170,marginLeft:10,marginRight:10,marginBottom:0}}></hr>

                    </Col>
                     <Col md={2} xs={12} sm={12}>
                     
                     <p style={{fontWeight:'lighter',fontSize:10,marginBottom:2,float:'right',textAlign:'right'}}>9 hours ago . 2 mins read</p>
                     <Image src={love} style={{width:170,height:150,marginLeft:7}}/>
                     
                     <p style={{fontWeight:'lighter',fontSize:10,marginBottom:2,float:'right',textAlign:'right',marginTop:15}}>9 hours ago . 2 mins read</p>
                     <Image src={love} style={{width:170,height:150,marginLeft:7}}/>

                     <p style={{fontWeight:'lighter',fontSize:10,marginBottom:2,float:'right',textAlign:'right',marginTop:15}}>9 hours ago . 2 mins read</p>
                     <Image src={love} style={{width:170,height:150,marginLeft:7}}/>
                     
                     <p style={{fontWeight:'lighter',fontSize:10,marginBottom:2,float:'right',textAlign:'right',marginTop:15}}>9 hours ago . 2 mins read</p>
                     <Image src={love} style={{width:170,height:150,marginLeft:7}}/>
                    </Col>
                    <Col md={3}>
                    <div style={{borderLeft:"2px solid lightgray",height:720,position:'absolute'}}></div>
                        <p style={{fontSize:17,fontWeight:'bold',marginTop:4,float:'left',textAlign:'left',marginLeft:5}}>10 Signs You've Found Your Soulmate</p>
                        <p style={{marginTop:0,fontWeight:'lighter',fontSize:10,marginBottom:2,float:'left',textAlign:'left',marginLeft:5}}>9 hours ago . 2 mins read</p>    
                        <hr style={{height:2,width:340,marginTop:100,marginLeft:10,marginRight:10,marginBottom:0}}></hr>
                        {/* 2nd row */}
                        <p style={{fontSize:17,fontWeight:'bold',marginTop:0,float:'left',textAlign:'left',marginLeft:5}}>10 Signs You've Found Your Soulmate</p>
                        <p style={{marginTop:0,fontWeight:'lighter',fontSize:10,marginBottom:2,float:'left',textAlign:'left',marginLeft:5}}>9 hours ago . 2 mins read</p>    
                        <hr style={{height:2,width:340,marginTop:100,marginLeft:10,marginRight:10,marginBottom:0}}></hr>
                        {/* 3rd row */}
                        <p style={{fontSize:17,fontWeight:'bold',marginTop:0,float:'left',textAlign:'left',marginLeft:5}}>The 3 Best & Worst Romantic Zodiac Matches</p>
                        <p style={{marginTop:0,fontWeight:'lighter',fontSize:10,marginBottom:2,float:'left',textAlign:'left',marginLeft:5}}>9 hours ago . 2 mins read</p>    
                        <hr style={{height:2,width:340,marginTop:100,marginLeft:10,marginRight:10,marginBottom:0}}></hr>
                        {/* 4th row */}
                        <p style={{fontSize:17,fontWeight:'bold',marginTop:0,float:'left',textAlign:'left',marginLeft:5}}>10 Signs You've Found Your Soulmate</p>
                        <p style={{marginTop:0,fontWeight:'lighter',fontSize:10,marginBottom:2,float:'left',textAlign:'left',marginLeft:5}}>9 hours ago . 2 mins read</p>    
                        <hr style={{height:2,width:340,marginTop:100,marginLeft:10,marginRight:10,marginBottom:0}}></hr>
                        {/* 5th row */}
                        <p style={{fontSize:17,fontWeight:'bold',marginTop:0,float:'left',textAlign:'left',marginLeft:5}}>10 Signs You've Found Your Soulmate</p>
                        <p style={{marginTop:0,fontWeight:'lighter',fontSize:10,marginBottom:2,float:'left',textAlign:'left',marginLeft:5}}>9 hours ago . 2 mins read</p>    
                        <hr style={{height:2,width:340,marginTop:100,marginLeft:10,marginRight:10,marginBottom:0}}></hr>
                        {/* 6th row */}
                        <p style={{fontSize:17,fontWeight:'bold',marginTop:0,float:'left',textAlign:'left',marginLeft:5}}>10 Signs You've Found Your Soulmate</p>
                        <p style={{marginTop:0,fontWeight:'lighter',fontSize:10,marginBottom:2,float:'left',textAlign:'left',marginLeft:5}}>9 hours ago . 2 mins read</p>    
                        <Button variant="warning" style={{marginTop:25,float:'left',padding:"8px 15px 8px 15px",fontWeight:'bold',color:'white',height:50,textAlign:'center',fontSize:15,width:340,float:'left',marginLeft:10}}>View all</Button>
                    </Col>
                    <Col md={1}>

                    <Image  src={love} style={{height:70,width:90,float:'right',marginRight:0,marginTop:10,marginLeft:10}} />
                    <Image  src={love} style={{height:70,width:90,float:'right',marginRight:0,marginTop:28,marginLeft:10}} />
                    <Image  src={love} style={{height:70,width:90,float:'right',marginRight:0,marginTop:32,marginLeft:10}} />
                    <Image  src={love} style={{height:70,width:90,float:'right',marginRight:0,marginTop:32,marginLeft:10}} />
                    <Image  src={love} style={{height:70,width:90,float:'right',marginRight:0,marginTop:33,marginLeft:10}} />
                    <Image  src={love} style={{height:70,width:90,float:'right',marginRight:0,marginTop:35,marginLeft:10}} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Articles
