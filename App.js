import React, { Component } from 'react'
import ModalIkki from './components/Modal'
import Sider from './components/Sider'
import "./app.css"
export default class App extends Component {


  state={
    modalVisible:false,
    users:[],
    selectedUser:""
  }

  toggle=()=>{
    this.setState({
      modalVisible:!this.state.modalVisible
    })
  }

  saveUser=(firstName, lastName, phone)=>{
      if(firstName || lastName || phone){
        let user = {firstName, lastName, phone}
        let a = this.state.users
        a.push(user)
        this.setState({
          users:a
        })



        localStorage.setItem("users", JSON.stringify(a))
      }

     
  }


  componentDidMount(){
    let usersString = localStorage.getItem("users")

    let userArray =JSON.parse(usersString)
    this.setState({
      users:userArray
    })
  }



  render() {
    const {users} = this.state
    return (
      <div className='container-fluid'>
        <ModalIkki 
            modalVisible={this.state.modalVisible} 
            toggle={this.toggle}
            saveUser={this.saveUser}
        />
        <div className="row">
          <div className="col-md-3 bg-info sal">
              <button className='btn btn-dark my-3' onClick={this.toggle}>+Add User</button>
              <hr />
              <Sider users={users}/>
          </div>
          <div className="col-md-9 bg-primary" style={{height:"100vh"}}>
           
          </div>
        </div>
      </div>
    )
  }
}
