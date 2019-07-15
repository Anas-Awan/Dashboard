import React,{Component} from "react";
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
    // Form,
    // FormGroup,
    // InputGroupAddon,
    // InputGroupText,
    // Input,
    // InputGroup,
} from "reactstrap";
import {
    // Badge,
    Card,
    // CardHeader,
    Button,
    CardFooter,
    // DropdownMenu,
    // DropdownItem,
    // UncontrolledDropdown,
    // DropdownToggle,
    // Media,
    // Pagination,
    // PaginationItem,
    // PaginationLink,
    // Progress,
    Table,
    Container,
    Row,
    // UncontrolledTooltip
} from "reactstrap";
import users from "./users";

class Preview extends Component{
    render(){
        return(
            <>
                <Container fluid>
                    <Row>
                        <div className="col">
                            <Card className="shadow" >
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
                                    <thead >
                                        <tr>
                                            <th scope="col">Task Title</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Task Description</th>
                                            <th scope="col">Start Date</th>
                                            <th scope="col">Task Points</th>
                                            <th scope="col">Award Status</th>
                                            <th scope="col">Redeem Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {users.map(user =>
                                            user.task_table.map(task =>
                                                <tr>
                                                    <td>{task.title}</td>
                                                    <td>{task.type}</td>
                                                    <td>{task.description}</td>
                                                    <td>{task.start_date}</td>
                                                    <td>{task.points}</td>
                                                    <td>{task.award_status}</td>
                                                    <td>{task.redeem_status}</td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </Table>
                                <CardFooter className="py-4">
                                </CardFooter>
                            </Card>
                        </div>
                    </Row>
                    <Row>
                        <div className="col">
                            <Button>Back</Button>
                            <Button className="btn btn-dark">Assign</Button>
                        </div>
                    </Row>
                </Container>
            </>
        );
    }
} 

export default Preview;