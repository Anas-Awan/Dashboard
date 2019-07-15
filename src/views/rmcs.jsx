import React, { Component } from 'react';
import users from "./users";

import {
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Card,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

class RMCS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switched: true
    };
  }

  toggleSwitch = () => {
    this.setState(prevState => {
      return {
        switched: !JSON.parse(prevState.switched)
      };
    });
  };


  render() {
    return (
      <>
          <div className="col">
            <Card className="shadow">
              <Container className="mt-4" fluid>
              <Row>
                --
              </Row>
              <Row>
                --
              </Row>
              <Row>
                --
              </Row>
                <Row>
                <CardHeader className="border-0">
                  <Row>
                    <div className="col">
                      <h3 className="mb-0">RCMs</h3>
                    </div>
                    <div className="col"></div>
                    <div className="col">
                      <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                        <FormGroup className="mb-0">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText style={{ color: "#000" }}>
                                <i className="fas fa-search" />
                              </InputGroupText>
                            </InputGroupAddon  >
                            <Input placeholder="Search" type="text" />
                          </InputGroup>
                        </FormGroup>
                      </Form>

                    </div>

                    <button onClick={this.toggleSwitch} >
                      <i class="fa fa-toggle-on" aria-hidden="true"></i>

                    </button>

                    <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                      <i className="fas fa-plus" />
                    </div>

                  </Row>
                </CardHeader>

                {this.state.switched ?
                  <Table className="align-items-center table-flush" responsive>
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Service Provider</th>
                        <th scope="col">Services</th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody>

                      {users.map(user =>
                        <tr>
                          <th scope="row">
                            <Media className="align-items-center">
                              <a
                                className="avatar rounded-circle mr-3"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <img
                                  alt="..."
                                  src={require("assets/img/theme/team-1-800x800.jpg")}
                                />
                              </a>
                              <Media>
                                <span className="mb-0 text-sm">
                                  {user.name}
                                </span>
                              </Media>
                            </Media>
                          </th>
                          <td>
                            <Col>
                              <div className="mb-3">
                                <i className=" ni ni-pin-3 mr-2" />
                                {user.address}
                              </div>
                              <div>
                                {/* <i className=" ni ni-pin-3 mr-2" /> */}
                                {user.phone}
                              </div>
                            </Col>
                          </td>
                          <td>
                            {user.serviceProvider}
                          </td>
                          <td>
                            {user.services}
                          </td>
                          <td>
                            <Button style={{ borderRadius: '100px' }} className="btn btn-dark btn-sm">Edit</Button>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                  :
                  <div className="pt-2">
                    <Container fluid>
                      <div className="header-body">
                        {/* Card stats */}
                        <Row>
                          {users.map(user =>
                            <Col lg="6" xl="3">

                              <Card className="card-stats mb-4 mb-xl-0">
                                <CardBody >
                                  <Row>
                                    <Col></Col>
                                    <Col className="col-auto">

                                      <img className="avatar rounded-circle"
                                        alt="..."
                                        src={require("assets/img/theme/team-1-800x800.jpg")}
                                      />
                                      <div className="mb-3" >
                                        <h3 className="mb-0 ">{user.name}</h3>
                                      </div>
                                    </Col>
                                    <Col ></Col>
                                  </Row>
                                  <Row>
                                  <div>
                                    <i className=" ni ni-pin-3 mr-2" />
                                    {user.address}
                                  </div>
                                    <div>{user.phone}</div>
                                  </Row>
                                  <Row>
                                    <Col>

                                    </Col>
                                    <Col>
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
                }


                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <span className="sr-only">Previous</span>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
                </Row>
              </Container>
            </Card>
          </div>
      </>

    );
  }
}

export default RMCS;