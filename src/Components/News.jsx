import React, {Component} from 'react'
import { Col, Image, Row, Grid} from 'react-bootstrap'
import './News.css'

class News extends Component{

    render(){

        return(
        
            <div>
                  <Image src="assets/person-3.jpeg" className="header-image"/>

            <Grid>
                  <h2>News</h2>
                  <Row>
                      <Col xs={12} sm={8} className="main-section">
                      <p>In sed ornare nisl. Phasellus justo nisl, interdum eu vestibulum non, placerat nec sem. Suspendisse efficitur neque quis enim lacinia ullamcorper ac vel nisl. Duis eu tempor arcu. Donec ligula velit, interdum ac fermentum eget, scelerisque ut neque. Nam imperdiet risus tempus faucibus rhoncus. Nunc posuere dolor vel dui suscipit, vitae mattis mi luctus.</p>
                      <p>In sed ornare nisl. Phasellus justo nisl, interdum eu vestibulum non, placerat nec sem. Suspendisse efficitur neque quis enim lacinia ullamcorper ac vel nisl. Duis eu tempor arcu. Donec ligula velit, interdum ac fermentum eget, scelerisque ut neque. Nam imperdiet risus tempus faucibus rhoncus. Nunc posuere dolor vel dui suscipit, vitae mattis mi luctus.</p>
                      <p>In sed ornare nisl. Phasellus justo nisl, interdum eu vestibulum non, placerat nec sem. Suspendisse efficitur neque quis enim lacinia ullamcorper ac vel nisl. Duis eu tempor arcu. Donec ligula velit, interdum ac fermentum eget, scelerisque ut neque. Nam imperdiet risus tempus faucibus rhoncus. Nunc posuere dolor vel dui suscipit, vitae mattis mi luctus.</p>
                      <p>In sed ornare nisl. Phasellus justo nisl, interdum eu vestibulum non, placerat nec sem. Suspendisse efficitur neque quis enim lacinia ullamcorper ac vel nisl. Duis eu tempor arcu. Donec ligula velit, interdum ac fermentum eget, scelerisque ut neque. Nam imperdiet risus tempus faucibus rhoncus. Nunc posuere dolor vel dui suscipit, vitae mattis mi luctus.</p>
                      <p>In sed ornare nisl. Phasellus justo nisl, interdum eu vestibulum non, placerat nec sem. Suspendisse efficitur neque quis enim lacinia ullamcorper ac vel nisl. Duis eu tempor arcu. Donec ligula velit, interdum ac fermentum eget, scelerisque ut neque. Nam imperdiet risus tempus faucibus rhoncus. Nunc posuere dolor vel dui suscipit, vitae mattis mi luctus.</p>
                      </Col>

                      <Col xs={12} sm={4} className="sidebar-section">
                      <Image src="assets/person-1.jpeg" />
                      <p>In sed ornare nisl. Phasellus justo nisl, interdum eu vestibulum non, placerat nec sem. Suspendisse efficitur neque quis enim lacinia ullamcorper ac vel nisl. Duis eu tempor arcu. Donec ligula velit, interdum ac fermentum eget, scelerisque ut neque. Nam imperdiet risus tempus faucibus rhoncus. Nunc posuere dolor vel dui suscipit, vitae mattis mi luctus.</p>  
                      </Col>
                  </Row>
            </Grid>      


            </div>
        )
    }
}

export default News