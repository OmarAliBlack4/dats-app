import { Col, Row } from "react-bootstrap";
// import { personData } from "./data";

function Content({perData}){
    return(
    <Row>
        <Col>
            <div className="content">
                {perData.length ? perData.map((el)=>{
                    return(
                        <div key={el.id} className="persons">
                            <img className="avatar" src={el.image} alt="avatar"/>
                            <div className="ps">
                                <p className="avatar-name">{el.name}</p>
                                <p className="avatar-date">{el.date}</p>
                            </div>
                        </div>
                    )
                }) : <h2>No Data Found</h2>}
            </div>
        </Col>
    </Row>
    )
}

export default Content;