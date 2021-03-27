import React from 'react';
import { Image,Container,Row,Col,Button,Card,Nav,Form, ButtonGroup,Tabs,Tab} from 'react-bootstrap';

function Newsletter() {
    return (
        <div style={{backgroundColor:'lightgray',width:'100%',height:100}}>
            <Container style={{backgroundColor:'lightgray',width:'100%',height:100}}>
                <Row>
                <Col md={12} sm={12} lg={12}>
                <p style={{textAlign:'center',color:'black',marginTop:25}}>
                    Subsribe to Newsletter to stay up to Date on our Letter News 
                    <input type='email' placeholder="Email" style={{marginLeft:10,borderRadius:5,marginRight:10,height:38,marginTop:10}} />
                <Button variant="warning" style={{padding:"5px 20px 10px 20px",fontWeight:'bold',color:'white',height:38}}>Subscribe</Button>
                </p>
                
                </Col>
                </Row>
                </Container>
                </div>
    )
}

export default Newsletter
