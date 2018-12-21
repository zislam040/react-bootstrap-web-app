import React, {Component} from 'react'
import { Grid, Col, Image} from 'react-bootstrap'
import './About.css'

class About extends Component{

    render(){

        return(

            <div>
                  <Image src="assets/about-us.jpg" className="header-image"/>

            <Grid>
                 <Col xs={12} sm={8} smOffset={2}>
                 <Image src="assets/person-1.jpeg" className="about-profile-pic" rounded />
                 <h3>Ilder Sharipawa</h3>
                 <p>Pellentesque at elementum quam, ac ullamcorper felis. Cras gravida erat nec nisl eleifend suscipit. Phasellus dignissim mollis elit eget feugiat. Praesent eleifend ut libero et elementum. Vivamus id aliquet nulla. In tempor, ante vel luctus fringilla, ligula massa ultricies augue, at semper risus turpis at ligula. Vestibulum egestas eros quis justo gravida, ac aliquet enim tristique.Pellentesque at elementum quam, ac ullamcorper felis. Cras gravida erat nec nisl eleifend suscipit. Phasellus dignissim mollis elit eget feugiat. Praesent eleifend ut libero et elementum. Vivamus id aliquet nulla. In tempor, ante vel luctus fringilla, ligula massa ultricies augue, at semper risus turpis at ligula. Vestibulum egestas eros quis justo gravida, ac aliquet enim tristique.Pellentesque at elementum quam, ac ullamcorper felis. Cras gravida erat nec nisl eleifend suscipit. Phasellus dignissim mollis elit eget feugiat. Praesent eleifend ut libero et elementum. Vivamus id aliquet nulla. In tempor, ante vel luctus fringilla, ligula massa ultricies augue, at semper risus turpis at ligula. Vestibulum egestas eros quis justo gravida, ac aliquet enim tristique</p>
                 
                 </Col>
            
            </Grid>      

            </div>
        )
    } 
}

export default About