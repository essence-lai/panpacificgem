import React from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button, Carousel, FormGroup, FormControl, Form, HelpBlock, Alert } from 'react-bootstrap';
import './styles.css'
import Navbar from '../navBar/index';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMobile, faEnvelope, faFax } from '@fortawesome/free-solid-svg-icons'
import { database } from '../../fire'


library.add(faPhone, faMobile, faEnvelope, faFax);

//email collection

function  FieldGroup({ id, label, help, ...props }) {
    return(
        <FormGroup controlId={id}>
            <FormControl {...props}/>
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

export default class  Home extends React.Component {
    constructor(){
        super();

        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.state = {
            name: '',
            email: '',
            message: '',
            show: false,
        };
    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleDismiss() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true});
    }

    onSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    database.ref('contacts').push({name, email, message});
    this.handleShow();
    setTimeout(this.handleDismiss, 3000);
    this.setState({
        name: '',
        email: '',
        message: ''
    });
    };

    render() {
        return (
            <Grid className="default">
                <Grid className="home">
                    <Navbar/>
                    <Carousel className="carousel">
                        <Carousel.Item className="image-carousel" >
                            <Image className="image-logo" src="../../assets/logo.png"/>
                        </Carousel.Item>
                        <Carousel.Item className="image-carousel">
                            <Image className="image-carousel-image-one-two" src="../../assets/carousel-one.jpg"/>
                            <Carousel.Caption className="carousel-item">
                                <h1 className="carousel-font"> Where Genuine Stones and Exclusive Fashion Designs</h1>
                                <h1 className="carousel-font"> Are Just the Beginning</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <Image className="image-carousel-image-one" src="../../assets/carousel-two.jpg"/>
                            <Carousel.Caption className="carousel-item">
                                <h1 className="carousel-font"> Check out some of our designs!</h1>
                                <Button  bsStyle="info" className="btn-primary"  href="/products"> View Products</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Grid>
                <Grid className="about-us">
                    <Row>
                        <Col sm={6} md={6}>
                            <h3 className="about-us-font">
                                Founded in 1983 and headquartered in the beautiful city of Vancouver, British Columbia. Pan Pacific Jewellery & Handicraft Inc. is a Canadian Jade wholesaler of fine Nephrite Jade jewellery, unique Jade carvings and Canadian handmade original sculptures. We also specialize in Amethyst, Hematite, Lapis, Agates and much more. We offer great up-to-date fashion jewelleries and souvenirs.
                            </h3>
                        </Col>
                        <Col sm={6} md={6} >
                         <Image className="image-about-us" src="../../assets/aboutus.jpg" />
                        </Col>
                    </Row>
                </Grid>
                <Grid className="visit-us">
                    <h1 className="visit-us-font">
                        Visit us at the following Gift Shows
                    </h1>
                   <Carousel className="carousel-two">
                       <Carousel.Item className="carousel-visit-us" >
                           <a target="_blank" rel="noopener noreferrer"  href='https://www.cangift.org/toronto-gift-fair/en/home/'>
                               <Image className="image-carousel-two" src="../../assets/toronto.jpg"/>
                               <Carousel.Caption >
                                   <h2 className="carousel-two-font-main"> Toronto Gift Show</h2>
                                   <h3 className="carousel-two-font-sub"> September 16 - 17</h3>
                               </Carousel.Caption>
                           </a>
                       </Carousel.Item>
                       <Carousel.Item className="carousel-visit-us">
                           <a target="_blank" rel="noopener noreferrer"  href="https://www.cangift.org/alberta-gift-fair/en/home/">
                               <Image className="image-carousel-two" src="../../assets/alberta.jpg"/>
                               <Carousel.Caption>
                                   <h2  className="carousel-two-font-main"> Alberta Gift Show</h2>
                                   <h3 className="carousel-two-font-sub"> August 26 -29</h3>
                               </Carousel.Caption>
                           </a>
                       </Carousel.Item>
                       <Carousel.Item className="carousel-visit-us">
                           <a target="_blank" rel="noopener noreferrer"  href="http://www.vancouvergiftexpo.com/">
                               <Image className="image-carousel-two" src="../../assets/vancouver.jpg"/>
                               <Carousel.Caption>
                                   <h2 className="carousel-two-font-main"> Vancouver Gift Show</h2>
                                   <h3 className="carousel-two-font-sub"> August 12 -14</h3>
                               </Carousel.Caption>
                           </a>
                       </Carousel.Item>
                   </Carousel>
                </Grid>

                <Grid className="contact-us">
                    <Row className="row-contact">
                        <Col sm={6} md={7}>
                            <Jumbotron  className="contact-form">
                                <h3 className="contact-us-font">Interested in our products</h3>
                                <h4 className= "contact-us-font">Get in touch with us today!</h4>
                                {
                                    this.state.show &&   <Alert bsStyle="success" onDismiss={this.handleDismiss}> <h4 className= "message-sent-font">Message Sent Successfully!</h4> </Alert>
                                }
                                <Form method="POST" action="https://formspree.io/panpacificgemsmail@gmail.com">
                                    <FieldGroup
                                        id="formControlsText"
                                        type="text"
                                        label="Name"
                                        placeholder="Enter Name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.onChange}
                                        required
                                    />
                                    <FieldGroup
                                        id="formControlsEmail"
                                        type="email"
                                        label="Email Address"
                                        placeholder="Enter Email Address"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                        required
                                    />
                                    <FormGroup controlId="formControlsTextarea">
                                        <FormControl
                                            style={{minHeight: 300}}
                                            componentClass="textarea"
                                            placeholder="Send Us a Message!"
                                            name="message"
                                            value={this.state.message}
                                            onChange={this.onChange}
                                        />
                                    </FormGroup>
                                    <Button type="submit">Send Message</Button>
                                </Form>
                            </Jumbotron>
                        </Col>
                        <Col sm={6} md={5} className="center">
                            <h3 className="contact-form-font-bold" > Pan Pacific Jewellery & Handicraft Inc</h3>
                            <h4 className="contact-form-font" style={{color: 'white', textAlign:'center', fontFamily: 'Quicksand'}}> Monday - Friday: 10am - 5pm PST</h4>
                            <h4 className="contact-form-font" style={{color: 'white', textAlign:'center', fontFamily: 'Quicksand'}}> <FontAwesomeIcon icon="phone" style={{marginRight: 10}}/> (604) 876 - 5111</h4>
                            <h4 className="contact-form-font" style={{color: 'white', textAlign:'center', fontFamily: 'Quicksand'}}> <FontAwesomeIcon icon="mobile" style={{marginRight: 10}}/> 1-(800) 555 - 4152</h4>
                            <h4 className="contact-form-font" style={{color: 'white', textAlign:'center', fontFamily: 'Quicksand'}}> <FontAwesomeIcon icon="fax" style={{marginRight: 10}}/>  (604) 876 - 5115</h4>
                            <h4 className="contact-form-font" style={{color: 'white', textAlign:'center', fontFamily: 'Quicksand'}}> <FontAwesomeIcon icon="envelope" style={{marginRight: 10}}/> info@panpacificgems.ca</h4>
                        </Col>
                    </Row>
                </Grid>
            </Grid>

        )
    }
}