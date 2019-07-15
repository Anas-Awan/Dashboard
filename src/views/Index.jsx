import React from "react";
import { Link } from "react-router-dom";
import { Button, Modal,  ModalBody, ModalFooter } from 'reactstrap'; //ModalHeader,

// node.js library that concatenates classes (strings)
// import classnames from "classnames";
// javascipt plugin for creating charts
// import Chart from "chart.js";
// react plugin used to create charts
// import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import users from "./users";

import {
  // Button,
  // Card,
  CardHeader,
  // CardBody,
  // // NavItem,
  // // NavLink,
  // // Nav,
  // // Progress,
  // Table,
  // Container,
  // Row,
  // // Col
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
} from "reactstrap";
import {
  // Badge,
  Card,
  // CardHeader,
  // Button,
  CardFooter,
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
  // DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  // Progress,
  Table,
  Container,
  Row,
  // UncontrolledTooltip
} from "reactstrap";

// core components
// import {
//   // chartOptions,
//   parseOptions,
//   // chartExample1,
//   // chartExample2
// } from "variables/charts.jsx";

import Header from "components/Headers/Header.jsx";

class Index extends React.Component {
  state = {
    activeNav: 1,
    modal: false

    // chartExample1Data: "data1",
    // users: '',
  };
  // toggleNavs = (e, index) => {
  //   e.preventDefault();
  //   this.setState({
  //     activeNav: index,
  //     // chartExample1Data:
  //     //   this.state.chartExample1Data === "data1" ? "data2" : "data1"
  //   });
  //   let wow = () => {
  //     console.log(this.state);
  //   };
  //   wow.bind(this);
  //   setTimeout(() => wow(), 1000);
  //   // this.chartReference.update();
  // };

  componentWillMount() {
    // if (window.Chart) {
    //   parseOptions(Chart, chartOptions());
    // }
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row>
                    <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                      <FormGroup className="mb-0">
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText style={{ color: "#000" }}>
                              <i className="fas fa-search" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Search" type="text" />
                        </InputGroup>
                      </FormGroup>
                    </Form>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead >
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Status</th>
                      <th scope="col">Address</th>
                      <th scope="col">Phone</th>
                      <th scope="col" />
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
                        <td>{user.status}</td>
                        <td>

                          <i className=" ni ni-pin-3 mr-2" />
                          {user.address}

                        </td>
                        <td>
                          {user.phone}
                        </td>
                        <td>
                          <Button style={{ borderRadius: '100px' }} className="btn btn-dark btn-sm" onClick={this.toggle}>Alert</Button>
                          <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle}>
                            {/* <ModalHeader>Alert</ModalHeader> */}
                            
                            <ModalBody>
                            <span className="text-lg">Alert </span>
                              <Input className="model-notify" width="15rem" placeholder="Notification Title" bsSize="sm"/>
                              <Input className="model-text" type="textarea" name="text" placeholder="Description"/>
                              
                            </ModalBody>
                            <ModalFooter>
                              <Button onClick={this.toggle}>Cancel</Button>{' '}
                              <Button color="dark" onClick={this.toggle}>Send</Button>
                            </ModalFooter>
                          </Modal>
                        </td>
                        <td>
                          <Link to={`/admin/${user.id}/viewreport`} style={{ borderRadius: '100px' }} className="btn btn-dark btn-sm">View Report</Link>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
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
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Index;
