import { Button, Col, Row} from "react-bootstrap";

function Buttons({showData , deleteData}){

    return(
            <Row>
                <Col className="buttoms">
                    <Button onClick={showData}  className="primary">Show</Button>
                    <Button onClick={deleteData} className="denger">Delete</Button>
                </Col>
            </Row>
    )
}
export default Buttons;