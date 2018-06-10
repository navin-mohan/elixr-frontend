import React, { Component } from 'react'
import './home.css'

import Chip from '@material-ui/core/Chip';

export default class Home extends Component{
    render(){
        return (
           <div className="container">
                <h1 className="title">hello user!</h1>
                <Chip>test</Chip>  
           </div>
        )
    }
}