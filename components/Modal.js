import React, { Component } from 'react'
import { Modal, ModalFooter, ModalBody, ModalHeader } from "reactstrap"

class ModalIkki extends Component {

  SubmitForm=(event)=>{
    event.preventDefault()
      let firstName = event.target[0].value
      let lastName = event.target[1].value
      let phone = event.target[2].value
      this.props.saveUser(firstName, lastName, phone)
      this.props.toggle()
  }
  render() {
    const { modalVisible, toggle } = this.props
    return (
      <div className='row'>
        <Modal isOpen={modalVisible} toggle={toggle}>
          <ModalHeader>AddUser</ModalHeader>
          <ModalBody>
            <form id='form' onSubmit={this.SubmitForm}>
              FirstName <input type="text" className='form-control' placeholder='FirstName' />
              LastName <input type="text" className='form-control' placeholder='LastName' />
              Phone <input type="number" className='form-control' placeholder='Phone' />
            </form>
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-success' form='form'>save</button>
            <button className='btn btn-danger' onClick={toggle}>cencel</button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
export default ModalIkki