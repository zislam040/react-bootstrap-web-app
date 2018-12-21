import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import{ Jumbotron, Grid, Image, Row, Col, Button} from 'react-bootstrap'
import './Home.css'



class Home extends Component{

    render(){


        return(
            <Grid>
                <Jumbotron>

                    <div>
                        <h2> Welcome to React life</h2>
                         <p> This is how to create an web site using React js and React-Bootstrap </p>
                   </div>
                   <Link to="./about">
                      <Button bsStyle="primary">About</Button>
                   </Link> 
              </Jumbotron>

              <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-1.jpeg" circle className="profile-pic"/>
                        <h3>Alina</h3>
                        <p> Pellentesque at elementum quam, ac ullamcorper felis. Cras gravida erat nec nisl eleifend suscipit. Phasellus dignissim mollis elit eget feugiat. Praesent eleifend ut libero et elementum. Vivamus id aliquet nulla. In tempor, ante vel luctus fringilla, ligula massa ultricies augue, at semper risus turpis at ligula. Vestibulum egestas eros quis justo gravida, ac aliquet enim tristique.</p>
                      
                    </Col>


                        <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-4.jpeg" circle className="profile-pic"/>
                        <h3>Alexandr</h3>
                        <p> Pellentesque at elementum quam, ac ullamcorper felis. Cras gravida erat nec nisl eleifend suscipit. Phasellus dignissim mollis elit eget feugiat. Praesent eleifend ut libero et elementum. Vivamus id aliquet nulla. In tempor, ante vel luctus fringilla, ligula massa ultricies augue, at semper risus turpis at ligula. Vestibulum egestas eros quis justo gravida, ac aliquet enim tristique.</p>
                       
                    </Col>


                        <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-5.jpeg" circle className="profile-pic"/>
                        <h3>Natalia</h3>
                        <p> Pellentesque at elementum quam, ac ullamcorper felis. Cras gravida erat nec nisl eleifend suscipit. Phasellus dignissim mollis elit eget feugiat. Praesent eleifend ut libero et elementum. Vivamus id aliquet nulla. In tempor, ante vel luctus fringilla, ligula massa ultricies augue, at semper risus turpis at ligula. Vestibulum egestas eros quis justo gravida, ac aliquet enim tristique.</p>
                        
                    </Col>
              </Row>  

            </Grid>
        )
    }

}

export default Home