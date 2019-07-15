import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Card, Container, CardHeader, CardBody } from "reactstrap";
import { Form, FormGroup, legend, Input, Label } from "reactstrap";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class AssignTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switched: false,
            modal: false,
            dropdownTask: false,
            dropdownWeek: false,
            month: false,
        };
    }


    toggleSwitch = () => {
        this.setState(prevState => {
            return {
                switched: !JSON.parse(prevState.switched)
            };
        });
    };

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    toggleTaskDropdown = () => {
        this.setState({
            dropdownTask: !this.state.dropdownTask
        });
    }

    toggleWeekDropdown = () =>{
        this.setState({
            dropdownWeek: !this.state.dropdownWeek
        });
    }
    handleMonth = () => {
        this.setState({
            month: !this.state.month
        });
    }


    render() {
        const id = this.props.match.params.id;
        console.log(id);
        return (
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

                                <CardBody>
                                    <Form>

                                        <FormGroup>
                                            <fieldset>
                                                <Row>
                                                    <legend>Task info</legend>
                                                    <legend>Task Description</legend>
                                                    <div className="col">
                                                        <Input placeholder="Task Title" bsSize="sm" />

                                                        <Label for="exampleDate">Start</Label>
                                                        <Input
                                                            type="date"
                                                            name="date"
                                                            // id="exampleDate"
                                                            // placeholder="2019/03/26"
                                                            bsSize="sm"
                                                        />

                                                        <Input
                                                            type="time"
                                                            name="time"
                                                            // id="exampleTime"
                                                            // placeholder="12:00 PM"
                                                            bsSize="sm"
                                                        />
                                                        <div>
                                                            <Label>Task Points</Label>
                                                            <ButtonDropdown isOpen={this.state.dropdownTask} toggle={this.toggleTaskDropdown}>
                                                                <DropdownToggle caret size="sm">
                                                                    Task Points
                                                                </DropdownToggle>
                                                                <DropdownMenu>
                                                                    <DropdownItem>10 Points</DropdownItem>
                                                                    <DropdownItem>20 Points</DropdownItem>
                                                                    <DropdownItem>30 Points</DropdownItem>
                                                                    <DropdownItem>40 Points</DropdownItem>
                                                                    <DropdownItem>50 Points</DropdownItem>
                                                                    <DropdownItem>60 Points</DropdownItem>
                                                                    <DropdownItem>70 Points</DropdownItem>
                                                                    <DropdownItem>Others</DropdownItem>
                                                                </DropdownMenu>
                                                            </ButtonDropdown>
                                                        </div>

                                                        <Input type="textarea" placeholder="Task Action..." bsSize="sm" />

                                                    </div>

                                                    <div className="col">
                                                        <i class="fa fa-toggle-on" aria-hidden="true" onClick={this.toggleSwitch}></i> <Label>Recurring Task</Label>
                                                        {this.state.switched ?
                                                            <div  >
                                                                <Label>Recurrence:</Label>
                                                                <input type="radio" /> <Label>Monthly</Label>
                                                                <input type="radio" /> <Label>Weekly</Label>
                                                                <input type="radio" /> <Label>Daily</Label>
                                                                <input type="radio" /> <Label onClick={this.toggle}>Custom</Label>
                                                                <div>
                                                                    <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle}>
                                                                        <ModalHeader>Custom Recurrence</ModalHeader>

                                                                        <ModalBody>
                                                                            <Row>
                                                                                <Label>Repeat every</Label>
                                                                                <Input className="model-recurrence" placeholder="1" bsSize="sm" />
                                                                                <ButtonDropdown isOpen={this.state.dropdownWeek} toggle={this.toggleWeekDropdown}>
                                                                                    <DropdownToggle caret size="sm">
                                                                                        Week
                                                                                    </DropdownToggle>
                                                                                    <DropdownMenu>
                                                                                        <DropdownItem>Year</DropdownItem>
                                                                                        <DropdownItem onClick={this.handleMonth} >Month</DropdownItem>
                                                                                        <DropdownItem>Day</DropdownItem>
                                                                                    </DropdownMenu>
                                                                                </ButtonDropdown>
                                                                            </Row>
                                                                            { this.state.month ? 
                                                                                <div>
                                                                                <ButtonDropdown isOpen={this.state.dropdownWeek} toggle={this.toggleWeekDropdown}>
                                                                                        <DropdownToggle caret size="sm">
                                                                                            Monthly on day 26
                                                                                        </DropdownToggle>
                                                                                        <DropdownMenu>
                                                                                            <DropdownItem>Monthly on fourth tue</DropdownItem>
                                                                                        </DropdownMenu>
                                                                                    </ButtonDropdown>
                                                                                </div>
                                                                                : null
                                                                            }
                                                                            

                                                                            <Row className="modal-row">
                                                                                
                                                                                <Input type="radio" /> <Label>After</Label> <Input type="text" className="model-recurrence" placeholder="5" size="sm"/> <span>Occurences</span>
                                                                                
                                                                            </Row >
                                                                            <Row className="modal-row">
                                                                            
                                                                                <Input type="radio" /> <Label>On</Label> <Input type="Date" className="model-date" size="sm" /> <span>Occurences</span>
                                                                            </Row>




                                                                        </ModalBody>
                                                                        <ModalFooter>
                                                                            <Button onClick={this.toggle}>Cancel</Button>{' '}
                                                                            <Button color="dark" onClick={this.toggle}>Send</Button>
                                                                        </ModalFooter>
                                                                    </Modal>
                                                                </div>
                                                            </div>
                                                            : null
                                                        }
                                                    </div>
                                                </Row>
                                            </fieldset>


                                        </FormGroup>

                                    </Form>
                                </CardBody>

                            </Card>
                        </div>
                    </Row>

                    <Link to="" className="btn btn-light">Back</Link>
                        
                    <Link to={`/admin/${id}/preview`} className="btn btn-dark">Preview</Link>
                   
                </Container>
            </>
        );
    }
}

export default AssignTask;