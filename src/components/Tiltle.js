import {Col , Row} from 'react-bootstrap';

function Title({person}){
    return(
        <Row className="tltle">
          <Col>
            You have {person.length} dates
          </Col>
        </Row>
    )
}

export default Title;