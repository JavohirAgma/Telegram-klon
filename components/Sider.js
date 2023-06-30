import React, { Component } from 'react'

export default class Sider extends Component {
  render() {
    const {users} = this.props
    return (
      <div>
            {
                users.map((item,index)=> <ul className='list-group' key={index}>
                    <li className='list-group-item my-1 user'>{item.firstName+"  "+item.lastName}</li>               
                </ul>)
            }
      </div>
    )
  }
}
