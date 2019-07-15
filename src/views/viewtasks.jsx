import React, { Component } from "react";
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
    Media,
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

class Viewreport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        };
    }
    render() {
        return (
            <>
                <Row>--</Row>
                <Row>--</Row>
                <Row>--</Row>

                <Container className="mt-10" fluid>
                    <Row>
                        <div className="col">

                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    <Row>
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
                                                <span className="mb-0 text-lg">
                                                    Charlie May
                                            </span>
                                                <span>On Probation</span>
                                                <span>327 Paris Hill Street</span>
                                            </Media>
                                        </Media>
                                    </Row>
                                </CardHeader>
                                <Row className="mb-5">
                                    <div className="ml-5 mr-6">Housing</div>
                                    <div className="mr-6">Parole</div>
                                    <div className="mr-6">Mentoring</div>
                                    <div className="mr-6">Drug Treatment</div>
                                    <div className="mr-6">Community Service</div>
                                    <div className="mr-6">Probation</div>
                                    <div className="mr-6">Other Services</div>
                                </Row>

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
                            <Button className="btn btn-dark">Next</Button>
                        </div>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Viewreport;