import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import EventS1 from "../components/event-s1";
import EventS2 from "../components/event-s2";
import EventS3 from "../components/event-s3";

class Event extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <EventS1/>
                <EventS2/>
                <EventS3/>
            </Container>    
        );
    }
}

export default Event;