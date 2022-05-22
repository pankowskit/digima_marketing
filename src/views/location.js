import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import LocationS1 from "../components/location-s1";
import LocationS2 from "../components/location-s2";

class Location extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <LocationS1/>
                <LocationS2/>
            </Container>    
        );
    }
}

export default Location;