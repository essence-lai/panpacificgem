import React from 'react';
import { Grid, Image, Row, Col } from 'react-bootstrap';
import LightBox from 'react-images';
import './styles.css'

export default class productsImage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lightBoxIsOn: false,
            src: "",
            caption: "",
        };

        this.handleImage = this.handleImage.bind(this);
        this.closeLightBox=this.closeLightBox.bind(this);
    }

    handleImage = (e) => {
      this.setState({src: e.picture, caption: e.name, lightBoxIsOn: true });
    };
    closeLightBox = () => {
        this.setState({src: "", caption: "", lightBoxIsOn: false})
    };
    render(){
        const listItems = this.props.list.map((object, i) =>
            <Grid key={i} className="list-product">
                <Row className="show-grid-list">
                    <Col xs={12} md={8} >
                        <Image className="list-product-image" src={object.picture}
                               onClick={() => {
                                   this.handleImage(object)
                               }}/>
                    </Col>
                    <Col xs={12} md={4}>
                        <Grid className="list-description">
                            <h4 className="list-product-font-name">{object.name}</h4>
                            <h4 className="list-product-font-sub">Dimensions: {object.dimensions}</h4>
                            <h4 className="list-product-font-sub">Quality: {object.quality}</h4>
                            <h4 className="list-product-font-sub">Included: {object.includes}</h4>
                        </Grid>
                    </Col>
                </Row>
            </Grid>
        );
        return(
            <Grid className="list-items">{listItems}
                <LightBox
                    images={[{src: this.state.src, caption: this.state.caption}]}
                    isOpen={this.state.lightBoxIsOn}
                    onClose={this.closeLightBox}

                />
            </Grid>
        )

    }
}