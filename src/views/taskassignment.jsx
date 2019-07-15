import React, {Component} from "react";
import { Link } from "react-router-dom";
import users from "./users";

import {
  Card,
  CardHeader,
  // Button,
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

class Taskassignment extends Component{
    render() {
        return(
            <>
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
          <div className="col">
            <Card className="shadow">
              <Container className="mt-4" fluid>

                <CardHeader className="border-0">
                  <Row>
                    <div className="col">
                      <h3 className="mb-2">Task Assignment</h3>
                    </div>
                  </Row>
                  <Row>
                      <div className="col-3">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow mr-2 "> 1 </div>
                        <span> Select RCM </span>
                        
                        </div>
                        <div className="col-3">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow mr-2">
                            2
                        </div>
                        <span> Task Defination </span>
                        </div>
                        <div className="col-3">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow mr-2">
                            3
                      </div>
                      <span> Task(s) Preview </span>
                      </div>
                  
                  </Row>


                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead>   
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Address</th>
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
                          <Link to={`/admin/${user.id}/viewtasks`} style={{ borderRadius: '100px' }} className="btn btn-dark btn-sm">View Tasks</Link>
                        </td>
                        <td>
                          <Link to={`/admin/${user.id}/assigntask`} style={{ borderRadius: '100px' }} className="btn btn-dark btn-sm">Assign Task</Link>
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
              </Container>
            </Card>
          </div>
        </Row>

      </>

        );
    }
}

export default Taskassignment;