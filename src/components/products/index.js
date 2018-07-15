import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button ,Navbar, NavDropdown, Nav, MenuItem, Collapse, Carousel, NavItem} from 'react-bootstrap';
import './styles.css'
import  MainNavbar from '../navBar/index';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getProducts} from "../../actions/ProductsActions";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import ProductsImage from '../productsImage/index'

library.add(faHome);


class  Products extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comingOutSoon: { Ornaments: false, Miscellaneous: false},
            productsShow: false,
            main: true
        };
        this.handleSoon = this.handleSoon.bind(this);
        this.handleProduct = this.handleProduct.bind(this);
        this.handleHome = this.handleHome.bind(this);
    }

    handleSoon = (e) =>{
        this.setState({comingOutSoon: {Bracelets: false, Brooches: false, Carvings: false, Earrings: false, Necklaces: false, Ornaments: false, Pendants: false, Rings: false, Miscellaneous: false} , productsShow: false, main: false});
        this.setState({comingOutSoon: {[e]: true}})

    };

    handleProduct = (e) => {
        this.setState({comingOutSoon: {Bracelets: false, Brooches: false, Carvings: false, Earrings: false, Necklaces: false, Ornaments: false, Pendants: false, Rings: false, Miscellaneous: false} , productsShow: false, main: false});
        this.props.getProducts(e);
        this.setState({productsShow: true});
    };

    handleHome = () => {
        this.setState({comingOutSoon: {Bracelets: false, Brooches: false, Carvings: false, Earrings: false, Necklaces: false, Ornaments: false, Pendants: false, Rings: false, Miscellaneous: false} , productsShow: false, main: false});
        this.setState({main: true});
    };

    render() {
        const { products } = this.props;
        return (
            <Grid className="default">
                <Grid className="product">
                    <Grid className="product-bar">
                        <MainNavbar/>
                    </Grid>
                  <Grid className="product-handler">
                      <Grid>
                          <Navbar inverse default  collapseOnSelect>
                              <Navbar.Header>
                                  <Navbar.Brand>
                                      <NavItem
                                          eventKey={10}
                                          onClick={() => {
                                              this.handleHome()
                                          }}

                                      >
                                          <FontAwesomeIcon icon="home" color="white"/>
                                      </NavItem>
                                  </Navbar.Brand>
                                  <Navbar.Toggle/>
                              </Navbar.Header>
                              <Navbar.Collapse>
                              <Nav className="nav-color">
                                  <NavDropdown
                                      eventkey={1}
                                      title="Bracelets"
                                      id="basic-nav-dropdown"
                                  >
                                      <MenuItem eventKey={1.1}
                                                onClick={() => {
                                                    this.handleSoon("Bracelets")
                                                }}
                                      > Jade Bracelets</MenuItem>
                                  </NavDropdown>
                                  <NavDropdown
                                      eventkey={2}
                                      title="Brooches"
                                      id="basic-nav-dropdown"
                                  >
                                      <MenuItem eventKey={2.1}
                                                onClick={() => {
                                                    this.handleSoon("Brooches")
                                                }}
                                      > Amber Brooches</MenuItem>
                                      <MenuItem eventKey={2.2}
                                                onClick={() => {
                                                    this.handleSoon("Brooches")
                                                }}
                                      > Amethyst Brooches</MenuItem>
                                      <MenuItem eventKey={2.3}
                                                onClick={() => {
                                                    this.handleSoon("Brooches")
                                                }}
                                      > Cats Eye Brooches</MenuItem>
                                      <MenuItem eventKey={2.4}
                                                onClick={() => {
                                                    this.handleSoon("Brooches")
                                                }}
                                      > Hematite Brooches</MenuItem>
                                      <MenuItem eventKey={2.5}
                                                onClick={() => {
                                                    this.handleSoon("Brooches")
                                                }}
                                      > Jade Brooches</MenuItem>
                                      <MenuItem eventKey={2.6}
                                                onClick={() => {
                                                    this.handleSoon("Brooches")
                                                }}
                                      > Lapis Brooches</MenuItem>
                                      <MenuItem eventKey={2.7}
                                                onClick={() => {
                                                    this.handleSoon("Brooches")
                                                }}
                                      > Multi-Colour Brooches</MenuItem>
                                      <MenuItem eventKey={2.8}
                                                onClick={() => {
                                                    this.handleSoon("Brooches")
                                                }}> Paua Shells Brooches</MenuItem>
                                      <MenuItem eventKey={2.9}
                                                onClick={() => {
                                                    this.handleSoon("Brooches")
                                                }}> Turquoise Brooches</MenuItem>
                                      <MenuItem eventKey={2.10}
                                                onClick={() => {
                                                    this.handleSoon("Brooches")
                                                }}> Rhodonite Brooches</MenuItem>
                                  </NavDropdown>
                                  <NavDropdown
                                      eventkey={3}
                                      title="Carvings"
                                      id="basic-nav-dropdown"
                                  >
                                      <MenuItem eventKey={3.1}
                                        onClick={ () => {
                                            this.handleProduct('products/carvings/jade')
                                        }}
                                      > Jade Carvings</MenuItem>
                                      <MenuItem eventKey={3.2}
                                                onClick={() => {
                                                    this.handleSoon("Carvings")
                                                }}
                                      > Star Marble Carvings</MenuItem>
                                  </NavDropdown>
                                  <NavDropdown
                                      eventkey={4}
                                      title="Earrings"
                                      id="basic-nav-dropdown"
                                  >
                                      <MenuItem eventKey={4.1}
                                                onClick={() => {
                                                    this.handleSoon("Earrings")
                                                }}
                                      > Amber Earring Sets</MenuItem>
                                      <MenuItem eventKey={4.2}
                                                onClick={() => {
                                                    this.handleSoon("Earrings")
                                                }}
                                      > Amethyst Earring Sets</MenuItem>
                                      <MenuItem eventKey={4.3}
                                                onClick={() => {
                                                    this.handleSoon("Earrings")
                                                }}
                                      > Hematite Earrings Sets</MenuItem>
                                      <MenuItem eventKey={4.4}
                                                onClick={() => {
                                                    this.handleSoon("Earrings")
                                                }}
                                      > Jade earring Sets</MenuItem>
                                      <MenuItem eventKey={4.5}
                                                onClick={() => {
                                                    this.handleSoon("Earrings")
                                                }}
                                      > Rhodonite Earring Sets</MenuItem>
                                  </NavDropdown>
                                  <NavDropdown
                                      eventkey={5}
                                      title="Necklaces"
                                      id="basic-nav-dropdown"
                                  >
                                      <MenuItem eventKey={5.1}
                                                onClick={() => {
                                                    this.handleSoon("Necklaces")
                                                }}
                                      > Jade Necklaces</MenuItem>
                                      <MenuItem eventKey={5.2}
                                                onClick={() => {
                                                    this.handleSoon("Necklaces")
                                                }}
                                      > Amethyst Necklaces</MenuItem>
                                      <MenuItem eventKey={5.3}
                                                onClick={() => {
                                                    this.handleSoon("Necklaces")
                                                }}
                                      > Hematite Necklaces</MenuItem>
                                      <MenuItem eventKey={5.4}
                                                onClick={() => {
                                                    this.handleSoon("Necklaces")
                                                }}
                                      > Turquoise Necklaces</MenuItem>
                                      <MenuItem eventKey={5.5}
                                                onClick={() => {
                                                    this.handleSoon("Necklaces")
                                                }}
                                      > Amber Necklaces</MenuItem>
                                      <MenuItem eventKey={5.6}
                                                onClick={() => {
                                                    this.handleSoon("Necklaces")
                                                }}
                                      > Lapis Lazuli Necklaces</MenuItem>
                                      <MenuItem eventKey={5.7}
                                                onClick={() => {
                                                    this.handleSoon("Necklaces")
                                                }}
                                      > Rhodonite Necklaces</MenuItem>
                                      <MenuItem eventKey={5.8}
                                                onClick={() => {
                                                    this.handleSoon("Necklaces")
                                                }}
                                      > Marble Necklaces</MenuItem>
                                  </NavDropdown>
                                  <NavDropdown
                                      eventkey={6}
                                      title="Ornaments"
                                      id="basic-nav-dropdown"
                                  >
                                      <MenuItem eventKey={6.1}
                                                onClick={() => {
                                                    this.handleSoon("Ornaments")
                                                }}
                                      > Coming Out Soon!</MenuItem>
                                  </NavDropdown>
                                  <NavDropdown
                                      eventkey={7}
                                      title="Pendants"
                                      id="basic-nav-dropdown"
                                  >
                                      <MenuItem eventKey={7.1}
                                                onClick={() => {
                                                    this.handleSoon("Pendants")
                                                }}
                                      > Jade Pendants</MenuItem>
                                  </NavDropdown>
                                  <NavDropdown
                                      eventkey={8}
                                      title="Rings"
                                      id="basic-nav-dropdown"
                                  >
                                      <MenuItem eventKey={8.1}
                                                onClick={() => {
                                                    this.handleSoon("Rings")
                                                }}
                                      > Amethyst Ring</MenuItem>
                                      <MenuItem eventKey={8.2}
                                                onClick={() => {
                                                    this.handleSoon("Rings")
                                                }}
                                      > Jade Rings</MenuItem>
                                  </NavDropdown>
                                  <NavDropdown
                                      eventkey={9}
                                      title="Miscellaneous"
                                      id="basic-nav-dropdown"
                                  >
                                      <MenuItem eventKey={9.1}
                                                onClick={() => {
                                                    this.handleSoon("Miscellaneous")
                                                }}
                                      > Coming Out Soon!</MenuItem>
                                  </NavDropdown>
                              </Nav>
                              </Navbar.Collapse>
                          </Navbar>
                      </Grid>
                      <Grid>
                      {this.state.main &&
                          <Grid className="product-grid">
                              <Grid className="title-grid">
                                    <Image className="product-banner-image" src="../../assets/products.jpeg" />
                                    <h1 className="product-font">Products</h1>
                              </Grid>
                              <h1 className="product-visit-us-font">
                                  Visit us at the following Gift Shows
                              </h1>
                              <Carousel className="product-carousel">
                                  <Carousel.Item className="product-carousel-visit-us" >
                                      <a target="_blank" rel="noopener noreferrer"  href='https://www.cangift.org/toronto-gift-fair/en/home/'>
                                          <Image className="product-image-carousel" src="../../assets/toronto.jpg"/>
                                          <Carousel.Caption >
                                              <h2 className="product-carousel-two-font-main"> Toronto Gift Show</h2>
                                              <h3 className="product-carousel-two-font-sub"> September 16 - 17</h3>
                                          </Carousel.Caption>
                                      </a>
                                  </Carousel.Item>
                                  <Carousel.Item className="product-carousel-visit-us">
                                      <a target="_blank" rel="noopener noreferrer"  href="https://www.cangift.org/alberta-gift-fair/en/home/">
                                          <Image className="product-image-carousel" src="../../assets/alberta.jpg"/>
                                          <Carousel.Caption>
                                              <h2  className="product-carousel-two-font-main"> Alberta Gift Show</h2>
                                              <h3 className="product-carousel-two-font-sub"> August 26 -29</h3>
                                          </Carousel.Caption>
                                      </a>
                                  </Carousel.Item>
                                  <Carousel.Item className="product-carousel-visit-us">
                                      <a target="_blank" rel="noopener noreferrer"  href="http://www.vancouvergiftexpo.com/">
                                          <Image className="product-image-carousel" src="../../assets/vancouver.jpg"/>
                                          <Carousel.Caption>
                                              <h2 className="product-carousel-two-font-main"> Vancouver Gift Show</h2>
                                              <h3 className="product-carousel-two-font-sub"> August 12 -14</h3>
                                          </Carousel.Caption>
                                      </a>
                                  </Carousel.Item>
                              </Carousel>
                          </Grid>
                          }
                          {
                              this.state.comingOutSoon.Bracelets &&
                              <Jumbotron className="coming-out-soon">
                                  <h1>Coming Out Soon!</h1>
                                  <p>
                                      Hey There! We are currently getting our Bracelets section ready and we hope to get our wonderful products to you soon!!!
                                  </p>
                              </Jumbotron>
                          }
                          {
                              this.state.comingOutSoon.Brooches &&
                              <Jumbotron className="coming-out-soon">
                                  <h1>Coming Out Soon!</h1>
                                  <p>
                                      Hey There! We are currently getting our Brooches section ready and we hope to get our wonderful products to you soon!!!
                                  </p>
                              </Jumbotron>
                          }
                          {
                              this.state.comingOutSoon.Carvings &&
                              <Jumbotron className="coming-out-soon">
                                  <h1>Coming Out Soon!</h1>
                                  <p>
                                      Hey There! We are currently getting our Carvings section ready and we hope to get our wonderful products to you soon!!!
                                  </p>
                              </Jumbotron>
                          }
                          {
                              this.state.comingOutSoon.Earrings &&
                              <Jumbotron className="coming-out-soon">
                                  <h1>Coming Out Soon!</h1>
                                  <p>
                                      Hey There! We are currently getting our Earrings section ready and we hope to get our wonderful products to you soon!!!
                                  </p>
                              </Jumbotron>
                          }
                          {
                              this.state.comingOutSoon.Necklaces &&
                              <Jumbotron className="coming-out-soon">
                                  <h1>Coming Out Soon!</h1>
                                  <p>
                                      Hey There! We are currently getting our Necklaces section ready and we hope to get our wonderful products to you soon!!!
                                  </p>
                              </Jumbotron>
                          }
                          {
                              this.state.comingOutSoon.Ornaments &&
                              <Jumbotron className="coming-out-soon">
                                  <h1>Coming Out Soon!</h1>
                                  <p>
                                      Hey There! We are currently getting our Ornaments section ready and we hope to get our wonderful products to you soon!!!
                                  </p>
                              </Jumbotron>
                          }
                          {
                              this.state.comingOutSoon.Pendants &&
                              <Jumbotron className="coming-out-soon">
                                  <h1>Coming Out Soon!</h1>
                                  <p>
                                      Hey There! We are currently getting our Pendants section ready and we hope to get our wonderful products to you soon!!!
                                  </p>
                              </Jumbotron>
                          }
                          {
                              this.state.comingOutSoon.Rings &&
                              <Jumbotron className="coming-out-soon">
                                  <h1>Coming Out Soon!</h1>
                                  <p>
                                      Hey There! We are currently getting our Rings section ready and we hope to get our wonderful products to you soon!!!
                                  </p>
                              </Jumbotron>
                          }
                          {
                              this.state.comingOutSoon.Miscellaneous &&
                              <Jumbotron className="coming-out-soon">
                                  <h1>Coming Out Soon!</h1>
                                  <p>
                                      Hey There! We are currently getting our Miscellaneous section ready and we hope to get our wonderful products to you soon!!!
                                  </p>
                              </Jumbotron>
                          }
                          {
                              ( products.length >= 2 && this.state.productsShow ) &&
                                  <Grid className="center-grid">
                                      <Grid className="title-grid">
                                          <Image className="product-banner-image" src="../../assets/jadeCarvings.jpeg" />
                                          <h1 className="product-font">Jade Carvings</h1>
                                      </Grid>
                                      <ProductsImage list={products}/>
                                  </Grid>
                          }
                      </Grid>
                  </Grid>
                </Grid>
            </Grid>
        )
    }

}

function mapStateToProps(state) {
    return {
        productsLoading: state.loading.products,
        products: state.products
    };
}

export default connect(
    mapStateToProps,
    { getProducts }
)(Products)