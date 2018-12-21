import React,{Component} from 'react';
import './Footer.css'
class Footer extends Component{


    render(){

        return(

            <div>
                  <footer className="footer">
                        <div className="container">
                            <span className="text-muted"><h4>Place sticky footer content here.</h4></span>
                        </div>
                  </footer>   
                   
            </div>
        )
    }
}

export default Footer