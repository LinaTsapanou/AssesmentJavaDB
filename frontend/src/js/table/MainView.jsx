import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import React, { Component } from 'react';
import { UserService } from "../services/UserService";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';


export default class MainView extends Component {

    constructor(){
        super();

        this.state = {
            displayDialog: false,

            user: {
                id: null,
                firstName: null,
                lastName: null,
                phoneNumber: null,
                email: null,
            }
        }

        this.userService = new UserService();
        this.saveUser = this.saveUser.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onClick(name, position) {
        let state = {
            [`${name}`]: true
        };

        if (position) {
            state = {
                ...state,
                position
            }
        }

        this.setState(state);
    }

    onHide(name) {
        this.setState({
            [`${name}`]: false
        });
    }

    componentDidMount() {
        this.userService.getAll().then((data) => this.setState({ users: data }));
    }

    saveUser() {
        this.userService.save(this.state.user).then((data) => {
            console.log(data)
          this.setState({
            displayDialog: false,
            user: {
                id: null,
                firstName: null,
                lastName: null,
                phoneNumber: null,
                email: null,
            }
          });

          this.userService.getAll().then((data) => {
            this.setState({ users: data });
            console.log(this.state.users);
          });
        });
      }


    render() {
        return(

            <div className="row p-4 mt-5 justify-content-center ">
                <div className="col-7 bg-primary rounded-4 d-flex align-middle flex-column p-4 bg-info">

                    <div className="mb-4">
                        <DataTable value={this.state.users} responsiveLayout="scroll">
                            <Column field="id" header="ID"></Column>
                            <Column field="firstName" header="First Name"></Column>
                            <Column field="lastName" header="Last Name"></Column>
                            <Column field="phoneNumber" header="Phone Number"></Column>
                            <Column field="email" header="Email"></Column>
                        </DataTable>
                    </div>

                    <div className="col-2">
                        <Button label="Add user" icon="pi pi-external-link" onClick={() => this.onClick('displayDialog')}/>
                    </div>

                    <Dialog header="Add a user" visible={this.state.displayDialog} style={{ width: '14vw' }} onHide={() => this.onHide('displayDialog')}>
                        
                        <div className="mb-4">
                            <h5>First Name</h5>
                            <InputText
                            className="p-1"
                            id="firstName"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={(event) => {
                                let val = event.target.value;
                                this.setState((prevState) => {
                                  let user = Object.assign({}, prevState.user);
                                  user.firstName = val;
                                  return { user };
                                });
                              }}
                            />
                        </div>

                        <div className="mb-4">
                            <h5>Last Name</h5>
                            <InputText
                            className="p-1"
                            id="lastName"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={(event) => {
                                let val = event.target.value;
                                this.setState((prevState) => {
                                  let user = Object.assign({}, prevState.user);
                                  user.lastName = val;
                                  return { user };
                                });
                              }}
                            />
                        </div>

                        <div className="mb-4">
                            <h5>Phone Number</h5>
                            <InputText
                            className="p-1"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={this.state.phoneNumber}
                            onChange={(event) => {
                                let val = event.target.value;
                                this.setState((prevState) => {
                                  let user = Object.assign({}, prevState.user);
                                  user.phoneNumber = val;
                                  return { user };
                                });
                              }}
                            />
                        </div>

                        <div className="mb-4">
                            <h5>Email</h5>
                            <InputText
                            className="p-1"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={(event) => {
                                let val = event.target.value;
                                this.setState((prevState) => {
                                  let user = Object.assign({}, prevState.user);
                                  user.email = val;
                                  return { user };
                                });
                            }}
                            />
                        </div>

                        <div className="col-2">
                            <Button label="Submit"
                            onClick={this.saveUser}
                            />
                        </div>

                    </Dialog>

                </div>
            </div>
 
        )
    }
}