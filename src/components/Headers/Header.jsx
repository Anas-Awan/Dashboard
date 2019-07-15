import React from "react";
import CardData from "./card-data";

// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap"; //CardTitle,

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                  { CardData.map(data => 
                    <Col lg="6" xl="3">
                    <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody >
                      <Row>
                        <Col></Col>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-chart-bar" />
                          </div>
                          <div >
                            <h2 className="h2 font-weight-bold mb-0">RCMs</h2>
                            <h4 className="h2 font-weight-bold mb-0">Count</h4>
                          </div>   
                        </Col>
                        <Col ></Col>
                      </Row>
                      <Row>
                      <Col>
                      <span> {data.upRatio} </span>
                        </Col>
                        <Col className="col-auto">
                        <span className="text-nowrap text-lg">{data.counts}</span>
                        </Col>
                        <Col >
                        <span> {data.downRatio} </span>
                        </Col>
                      </Row>
                      
                    </CardBody>
                  </Card>
                  </Col>
                  )} 
                
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
