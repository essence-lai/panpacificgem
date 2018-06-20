import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Carousel } from 'react-bootstrap';
import './styles.css'
import Navbar from '../navBar/index';
import Products from "../products";


export default class  Home extends React.Component {
    render() {
        return (
            <Grid className="default">
                <Grid className="home">
                    <Navbar/>
                    <Carousel>
                        <Carousel.Item className="carousel">
                            <Image className="image-logo" src="../../assets/logo.png"/>
                        </Carousel.Item>
                        <Carousel.Item className="carousel">
                            <Image className="image-carousel" src="../../assets/carousel-one-copy.jpg"/>
                            <Carousel.Caption style={{paddingBottom: 110}}>
                                <h1 style={{color: 'white', textAlign: 'center', fontFamily: 'Quicksand' }}> Where Genuine Stones and Exclusive Fashion Designs</h1>
                                <h1 style={{color: 'white', textAlign: 'center', fontFamily: 'Quicksand' }}> Are Just the Beginning</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="carousel">
                            <Image className="image-carousel" src="../../assets/carousel-two.jpg"/>
                            <Carousel.Caption style={{paddingBottom: 100}}>
                                <h1 style={{color: 'white', textAlign: 'center', paddingBottom: 15}}> Check out some of our designs!</h1>
                                <Button  className="btn-primary" bsSize="large" href="/products"> View Products</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Grid>
                <Grid className="about-us">
                    <Row>
                        <Col sm={8} md={6}>
                            <h3 className="about-us-font" style={{fontFamily: 'Quicksand'}}>
                                Founded in 1983 and headquartered in the beautiful city of Vancouver, British Columbia. Pan Pacific Jewellery & Handicraft Inc. is a Canadian Jade wholesaler of fine Nephrite Jade jewellery, unique Jade carvings and Canadian handmade original sculptures. We also specialize in Amethyst, Hematite, Lapis, Agates and much more. We offer great up-to-date fashion jewelleries and souvenirs.
                            </h3>
                        </Col>
                        <Col sm={8} md={6}>
                         <Image className="image-about-us" src="../../assets/aboutus.jpg" />
                        </Col>
                    </Row>
                </Grid>
                <Grid className="visit-us">
                    <h1 style={{color: 'white', textAlign: 'center', padding: 10, fontFamily:"Quicksand"}}>
                        Visit us at the following Gift Shows
                    </h1>
                   <Carousel className="visit-us">
                       <Carousel.Item className="carousel-visit-us" >
                           <a target="_blank" href='https://www.cangift.org/toronto-gift-fair/en/home/'>
                               <Image className="image-carousel-two" src="../../assets/toronto.jpg"/>
                               <Carousel.Caption style={{paddingBottom: 0}} >
                                   <h2 style={{color: 'white', textAlign: 'center', fontFamily: 'Quicksand' }}> Toronto Gift Show</h2>
                                   <h3 style={{color: 'white', textAlign: 'center', fontFamily: 'Quicksand' }}> January 28 to February 1</h3>
                               </Carousel.Caption>
                           </a>
                       </Carousel.Item>
                       <Carousel.Item className="carousel-visit-us">
                           <a target="_blank" href="https://www.cangift.org/alberta-gift-fair/en/home/">
                               <Image className="image-carousel-two" src="../../assets/alberta.jpg"/>
                               <Carousel.Caption>
                                   <h2 style={{color: 'white', textAlign: 'center', fontFamily: 'Quicksand' }}> Alberta Gift Show</h2>
                                   <h3 style={{color: 'white', textAlign: 'center', fontFamily: 'Quicksand' }}> January 28 to February 1</h3>
                               </Carousel.Caption>
                           </a>
                       </Carousel.Item>
                       <Carousel.Item className="carousel-visit-us">
                           <a target="_blank" href="http://www.vancouvergiftexpo.com/">
                               <Image className="image-carousel-two" src="../../assets/vancouver.jpg"/>
                               <Carousel.Caption>
                                   <h2 style={{color: 'white', textAlign: 'center', fontFamily: 'Quicksand' }}> Vancouver Gift Show</h2>
                                   <h3 style={{color: 'white', textAlign: 'center', fontFamily: 'Quicksand' }}> January 28 to February 1</h3>
                               </Carousel.Caption>
                           </a>
                       </Carousel.Item>
                   </Carousel>
                </Grid>

                <Grid className="contact-us">
                    <Row>
                        <Col sm={8} md={4}>
                        </Col>
                        <Col sm={12} md={12}>
                            <p style={{color: 'white', textAlign:'center', fontFamily: 'Quicksand'}}> Pan Pacific Jewellery & Handicraft Inc</p>
                            <p style={{color: 'white', textAlign:'center', fontFamily: 'Quicksand'}}> Monday - Friday: 10am - 5pm PST</p>
                            <p style={{color: 'white', textAlign:'center', fontFamily: 'Quicksand'}}> (604) 876 - 5111</p>
                            <p style={{color: 'white', textAlign:'center', fontFamily: 'Quicksand'}}> 1-(800) 555 - 4152</p>
                            <p style={{color: 'white', textAlign:'center', fontFamily: 'Quicksand'}}> info@panpacificgems.ca</p>
                        </Col>
                    </Row>
                </Grid>
            </Grid>

        )
    }
}