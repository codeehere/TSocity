import React, { Component } from 'react'
import loader from './loader.gif'
export default class snipper extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loader} alt="loading" style={{width:'80px'}}/>
      </div>
    )
  }
}
