import React from 'react';
import { Image,Container,Row,Col,Button} from 'react-bootstrap';
import aquarius from '../Assets/Landing Page/Icons/Zodiacs/aquarius.png';
import aries from '../Assets/Landing Page/Icons/Zodiacs/aries.png';
import cancer from '../Assets/Landing Page/Icons/Zodiacs/cancer.png';
import capricorn from '../Assets/Landing Page/Icons/Zodiacs/capricorn.png';
import gemini from '../Assets/Landing Page/Icons/Zodiacs/gemini.png';
import leo from '../Assets/Landing Page/Icons/Zodiacs/leo.png';
import libra from '../Assets/Landing Page/Icons/Zodiacs/libra.png';
import pisces from '../Assets/Landing Page/Icons/Zodiacs/pisces.png';
import sagittarius from '../Assets/Landing Page/Icons/Zodiacs/sagittarius.png';
import scorpio from '../Assets/Landing Page/Icons/Zodiacs/scorpio.png';
import taurus from '../Assets/Landing Page/Icons/Zodiacs/taurus.png';
import virgo from '../Assets/Landing Page/Icons/Zodiacs/virgo.png';
function Insights() {
    return (
        <div>
            <Container>
            <h3 style={{textAlign:'center',marginBottom:50}}> View Insights of your day to day life</h3>
               <Row style={{marginBottom:50}}>
                    <Col sm={1} xs={4}>
                        <Image src={aquarius} style={{width:40,height:40}}/>
                        <Row style={{textAlign:'center'}}>
                        <p style={{fontWeight:'bold',marginTop:7,marginBottom:0}}>Aquarius </p>
                        </Row>
                        <Row>
                            <p style={{fontWeight:'normal',fontSize:11,marginLeft:0,marginTop:0}}>Jan 20 - Feb 18</p>
                        </Row>
                    </Col>

                    <Col sm={1}  xs={4}>
                        <Image src={pisces} style={{width:40,height:40}}/>
                        <Row style={{textAlign:'center'}}>
                        <p style={{fontWeight:'bold',marginTop:7,marginBottom:0,marginLeft:8,textAlign:'center'}}>Pisces </p>
                        </Row>
                        <Row>
                            <p style={{fontWeight:'normal',fontSize:12,marginLeft:0,marginTop:0}}>Feb 19 - Mar 20</p>
                        </Row>
                    </Col>

                    <Col sm={1}  xs={4}>
                        <Image src={aries} style={{width:40,height:40}}/>
                        <Row>
                        <p style={{fontWeight:'bold',marginTop:7,marginBottom:0,marginLeft:13,textAlign:'center'}}>Aries </p>
                        </Row>
                        <Row>
                            <p style={{fontWeight:'normal',fontSize:12,marginLeft:0,marginTop:0}}>Mar 21 - Apr 19</p>
                        </Row>
                    </Col>

                    <Col sm={1} xs={4}>
                        <Image src={taurus} style={{width:40,height:40}}/>
                        <Row>
                        <p style={{fontWeight:'bold',marginTop:7,marginBottom:0,marginLeft:8,textAlign:'center'}}>Taurus </p>
                        </Row>
                        <Row>
                            <p style={{fontWeight:'normal',fontSize:12,marginLeft:0,marginTop:0}}>Apr 20 - May 20</p>
                        </Row>
                    </Col>

                    <Col sm={1} xs={4}>
                        <Image src={gemini} style={{width:40,height:40}}/>
                        <Row>
                        <p style={{fontWeight:'bold',marginTop:7,marginBottom:0,marginLeft:8,textAlign:'center'}}>Gemini </p>
                        </Row>
                        <Row>
                            <p style={{fontWeight:'normal',fontSize:11,marginLeft:0,marginTop:0}}>May 21 - June 20</p>
                        </Row>
                    </Col>

                    <Col sm={1} xs={4}>
                        <Image src={cancer} style={{width:40,height:40}}/>
                        <Row>
                        <p style={{fontWeight:'bold',marginTop:7,marginBottom:0,marginLeft:8,textAlign:'center'}}>Cancer </p>
                        </Row>
                        <Row>
                            <p style={{fontWeight:'normal',fontSize:11,marginLeft:0,marginTop:0}}>June 22 - July 21</p>
                        </Row>
                    </Col>

                    <Col sm={1} xs={4}>
                        <Image src={leo} style={{width:40,height:40}}/>
                        <Row>
                        <p style={{fontWeight:'bold',marginTop:7,marginBottom:0,marginLeft:19,textAlign:'center'}}>Leo </p>
                        </Row>
                        <Row>
                            <p style={{fontWeight:'normal',fontSize:11,marginLeft:0,marginTop:0}}>July 23 - Aug 22</p>
                        </Row>
                    </Col>

                    <Col sm={1} xs={4} >
                        <Image src={virgo} style={{width:40,height:40}}/>
                        <Row>
                        <p style={{fontWeight:'bold',marginTop:7,marginBottom:0,marginLeft:13,textAlign:'center'}}>Virgo </p>
                        </Row>
                        <Row>
                            <p style={{fontWeight:'normal',fontSize:11,marginLeft:0,marginTop:0}}>Aug 23 - Sept 22</p>
                        </Row>
                    </Col>

                    <Col sm={1} xs={4}>
                        <Image src={libra} style={{width:40,height:40}}/>
                        <Row>
                        <p style={{fontWeight:'bold',marginTop:7,marginBottom:0,marginLeft:13,textAlign:'center'}}>Libra </p>
                        </Row>
                        <Row>
                            <p style={{fontWeight:'normal',fontSize:11,marginLeft:0,marginTop:0}}>Sept 23 - Nov 21</p>
                        </Row>
                    </Col>

                    <Col sm={1} xs={4}>
                        <Image src={scorpio} style={{width:40,height:40}}/>
                        <Row>
                        <p style={{fontWeight:'bold',marginTop:7,marginBottom:0,marginLeft:8,textAlign:'center'}}>Scorpio </p>
                        </Row>
                        <Row>
                            <p style={{fontWeight:'normal',fontSize:11,marginLeft:0,marginTop:0}}>Oct 23 - Nov 21</p>
                        </Row>
                    </Col>

                    <Col sm={1} xs={4}>
                        <Image src={sagittarius} style={{width:40,height:40}}/>
                        <Row>
                        <p style={{fontWeight:'bold',marginTop:7,marginBottom:0}}>Sagittarius </p>
                        </Row>
                        <Row>
                            <p style={{fontWeight:'normal',fontSize:11,marginLeft:0,marginTop:0}}>Nov 22 - Dec 21</p>
                        </Row>
                    </Col>

                    <Col sm={1} xs={4}>
                        <Image src={capricorn} style={{width:40,height:40}}/>
                        <Row>
                        <p style={{fontWeight:'bold',marginTop:7,marginBottom:0}}>Capricorn </p>
                        </Row>
                        <Row>
                            <p style={{fontWeight:'normal',fontSize:11,marginLeft:0,marginTop:0}}>Dec 22 - Jan 19</p>
                        </Row>
                    </Col>
                </Row>             
            
            </Container>
        </div>
    )
}

export default Insights
