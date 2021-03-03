import React from 'react';
import { Image,Container,Row,Col,Button} from 'react-bootstrap';
import brandvalue from '../Assets/Landing Page/Illustrations/brand value.png';

function BrandValue() {
    return (
        <div>
            <Container >
                   
                <h3 style={{textAlign:'center',marginBottom:50}}> Tagline here to convey the Brand Value</h3>
                 <Row style={{marginBottom:80}}>
                     <Col md={4} xs={12} sm={12}>
                        <h4>What is the <span style={{color:'orange'}}>importance of Kundali</span> in your life?</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <Button variant="warning" style={{marginTop:10,float:'left',padding:"8px 15px 8px 15px",fontWeight:'bold',color:'white',height:50,textAlign:'center',fontSize:15}}>Create Kundali</Button>
                     </Col>
                     <Col md={4} xs={12} sm={12}>
                        <h4>How can VedicSeer help you?</h4>
                        <p style={{marginTop:35}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <Button variant="warning" style={{marginTop:10,float:'left',padding:"8px 15px 8px 15px",fontWeight:'bold',color:'white',height:50,textAlign:'center',fontSize:15}}>View FAQs</Button>
                     </Col>
                     <Col md={4} xs={12} sm={12}>
                        <h4>Why use our <span style={{color:'orange'}}>pocket friendly</span> astrology API?</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <Button variant="warning" style={{marginTop:10,float:'left',padding:"8px 15px 8px 15px",fontWeight:'bold',color:'white',height:50,textAlign:'center',fontSize:15}}>Subscribe</Button>
                     </Col>
                 </Row>
                <Row style={{marginBottom:100}}>
                    <Col md={1} xs={12} sm={12}>
                        <Image src={brandvalue} style={{width:1000,height:500,float:'center',marginLeft:65}}/>
                    </Col>
                </Row>
            </Container>
         </div>   
        
    )
}

export default BrandValue
